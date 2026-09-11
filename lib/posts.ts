import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

const postsDirectory = path.join(process.cwd(), "content/posts");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
};

function readPostFile(fileName: string) {
  const fullPath = path.join(postsDirectory, fileName);
  return fs.readFileSync(fullPath, "utf8");
}

function getRequiredString(
  data: Record<string, unknown>,
  field: "title" | "date",
  fileName: string,
): string {
  const value = data[field];

  if (typeof value !== "string" || !value.trim()) {
    throw new Error(
      `Missing required "${field}" in frontmatter of "${fileName}".`,
    );
  }

  return value.trim();
}

function createExcerpt(content: string, length = 100) {
  const text = content
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[*_~`]/g, "")
    .replace(/\s+/g, " ")
    .trim();

  if (text.length <= length) {
    return text;
  }

  return `${text.slice(0, length).replace(/\s+\S*$/, "").trim()}...`;
}

/** Metadata for every post, newest first — used on the blog index page. */
export function getSortedPostsMeta(): PostMeta[] {
  if (!fs.existsSync(postsDirectory)) return [];

  const fileNames = fs
    .readdirSync(postsDirectory)
    .filter((f) => f.endsWith(".md"));

  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const { data, content } = matter(readPostFile(fileName));

    return {
      slug,
      title: getRequiredString(data, "title", fileName),
      date: getRequiredString(data, "date", fileName),
      excerpt: createExcerpt(content),
      tags: Array.isArray(data.tags) ? (data.tags as string[]) : [],
    };
  });

  return posts.sort(
    (a, b) =>
      new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

/** Every post's slug — used so Next.js knows which /blog/[slug] pages to build. */
export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) return [];

  return fs
    .readdirSync(postsDirectory)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

function calculateReadingTime(content: string) {
  const words = content.trim().split(/\s+/).filter(Boolean);
  const wordsPerMinute = 200;

  return Math.max(1, Math.ceil(words.length / wordsPerMinute));
}

/** Full content (as HTML) plus metadata for one post. */
export async function getPostBySlug(slug: string) {
  const fileContents = readPostFile(`${slug}.md`);
  const { data, content } = matter(fileContents);

  const processed = await remark().use(remarkHtml).process(content);

  const posts = getSortedPostsMeta();
  const currentIndex = posts.findIndex((post) => post.slug === slug);

  const previousPost =
    currentIndex >= 0 && currentIndex < posts.length - 1
      ? posts[currentIndex + 1]
      : null;

  const nextPost =
    currentIndex > 0 ? posts[currentIndex - 1] : null;

  return {
    slug,
    title: getRequiredString(data, "title", `${slug}.md`),
    date: getRequiredString(data, "date", `${slug}.md`),
    excerpt: createExcerpt(content),
    tags: Array.isArray(data.tags) ? (data.tags as string[]) : [],
    readingTime: calculateReadingTime(content),
    previousPost,
    nextPost,
    contentHtml: processed.toString(),
  };
}

export function getRelatedPosts(
  currentSlug: string,
  currentTags: string[],
  limit = 3,
): PostMeta[] {
  if (!currentTags.length) return [];

  const currentTagSet = new Set(currentTags);

  return getSortedPostsMeta()
    .filter((post) => post.slug !== currentSlug)
    .map((post) => {
      const sharedTags = post.tags.filter((tag) =>
        currentTagSet.has(tag),
      );

      return {
        post,
        sharedTagCount: sharedTags.length,
      };
    })
    .filter(({ sharedTagCount }) => sharedTagCount > 0)
    .sort((a, b) => {
      if (b.sharedTagCount !== a.sharedTagCount) {
        return b.sharedTagCount - a.sharedTagCount;
      }

      return (
        new Date(b.post.date).getTime() -
        new Date(a.post.date).getTime()
      );
    })
    .slice(0, limit)
    .map(({ post }) => post);
}
