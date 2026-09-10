import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPostSlugs, getPostBySlug } from "@/lib/posts";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  try {
    const post = await getPostBySlug(slug);

    return { title: `${post.title} | Jade Sibalde`, description: post.excerpt };
  } catch {
    return {};
  }
}

function formatDate(dateString: string) {
  if (!dateString) return "";
  return new Date(dateString).toLocaleDateString("pt-PT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  let post: Awaited<ReturnType<typeof getPostBySlug>>;

  try {
    post = await getPostBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:py-24">
      <Link href="/blog" className="text-sm text-gray-500 hover:underline">
        ← Voltar ao blog
      </Link>

      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-gray-900">
        {post.title}
      </h1>

      {post.date && (
        <time dateTime={post.date} className="mt-2 block text-sm text-gray-500">
          {formatDate(post.date)}
        </time>
      )}

      {post.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Requires the @tailwindcss/typography plugin — see setup notes */}
      <div
        className="prose prose-neutral mt-8 max-w-none prose-a:text-gray-900"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </article>
  );
}
