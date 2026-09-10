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

/** Metadata for every post, newest first — used on the blog index page. */
export function getSortedPostsMeta(): PostMeta[] {
  if (!fs.existsSync(postsDirectory)) return [];

  const fileNames = fs.readdirSync(postsDirectory).filter((f) => f.endsWith(".md"));

  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const { data } = matter(readPostFile(fileName));

    return {
      slug,
      title: (data.title as string) ?? slug,
      date: (data.date as string) ?? "",
      excerpt: (data.excerpt as string) ?? "",
      tags: Array.isArray(data.tags) ? (data.tags as string[]) : [],
    };
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
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

  return {
    slug,
    title: (data.title as string) ?? slug,
    date: (data.date as string) ?? "",
    excerpt: (data.excerpt as string) ?? "",
    tags: Array.isArray(data.tags) ? (data.tags as string[]) : [],
    readingTime: calculateReadingTime(content),
    contentHtml: processed.toString(),
  };
}
