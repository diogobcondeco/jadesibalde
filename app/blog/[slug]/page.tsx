import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllPostSlugs,
  getPostBySlug,
  getRelatedPosts,
} from "@/lib/posts";

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

    return {
      title: `${post.title} | Jade Sibalde`,
      description: post.excerpt,
      alternates: {
        canonical: `/blog/${post.slug}`,
      },
    };
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

  const relatedPosts = getRelatedPosts(
    post.slug,
    post.tags,
  );

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:py-24">
      <Link
        href="/blog"
        className="rounded text-sm text-gray-500 hover:underline focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
      >
        ← Voltar ao blog
      </Link>

      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-gray-900">
        {post.title}
      </h1>

      <div className="mt-2 flex flex-wrap items-center gap-x-2 text-sm text-gray-500">
        {post.date && (
          <time dateTime={post.date}>
            {formatDate(post.date)}
          </time>
        )}

        {post.date && <span aria-hidden="true">·</span>}

        <span>
          {post.readingTime}{" "}
          {post.readingTime === 1 ? "minuto" : "minutos"} de leitura
        </span>
      </div>

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

      {relatedPosts.length > 0 && (
        <section
          className="mt-12 border-t border-gray-200 pt-8"
          aria-labelledby="related-posts-title"
        >
          <h2
            id="related-posts-title"
            className="text-xl font-semibold text-gray-900"
          >
            Artigos relacionados
          </h2>

          <div className="mt-6 space-y-6">
            {relatedPosts.map((relatedPost) => (
              <article key={relatedPost.slug}>
                <Link
                  href={`/blog/${relatedPost.slug}`}
                  className="group block rounded focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-4"
                >
                  <h3 className="font-medium text-gray-900 group-hover:underline">
                    {relatedPost.title}
                  </h3>

                  {relatedPost.date && (
                    <time
                      dateTime={relatedPost.date}
                      className="mt-1 block text-sm text-gray-500"
                    >
                      {formatDate(relatedPost.date)}
                    </time>
                  )}

                  {relatedPost.excerpt && (
                    <p className="mt-2 text-sm text-gray-600">
                      {relatedPost.excerpt}
                    </p>
                  )}
                </Link>
              </article>
            ))}
          </div>
        </section>
      )}

      <nav
        aria-label="Navegação entre artigos"
        className="mt-12 grid grid-cols-2 gap-4 border-t border-gray-200 pt-8"
      >
        <div>
          {post.previousPost && (
            <Link
              href={`/blog/${post.previousPost.slug}`}
              className="group block rounded focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-4"
            >
              <span className="text-sm text-gray-500">
                ← Artigo anterior
              </span>

              <span className="mt-1 block font-medium text-gray-900 group-hover:underline">
                {post.previousPost.title}
              </span>
            </Link>
          )}
        </div>

        <div className="text-right">
          {post.nextPost && (
            <Link
              href={`/blog/${post.nextPost.slug}`}
              className="group block rounded focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-4"
            >
              <span className="text-sm text-gray-500">
                Próximo artigo →
              </span>

              <span className="mt-1 block font-medium text-gray-900 group-hover:underline">
                {post.nextPost.title}
              </span>
            </Link>
          )}
        </div>
      </nav>
    </article>
  );
}
