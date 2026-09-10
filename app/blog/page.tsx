import Link from "next/link";
import { getSortedPostsMeta } from "@/lib/posts";
import SectionTitle from "@/components/SectionTitle";
import Wrapper from "@/components/Wrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Jade Sibalde",
};

function formatDate(dateString: string) {
  if (!dateString) return "";
  return new Date(dateString).toLocaleDateString("pt-PT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogIndexPage() {
  const posts = getSortedPostsMeta();

  return (
    <div className="py-4">
      <Wrapper>
      <SectionTitle titleText={"Blog"} />

      {posts.length === 0 ? (
        <p className="mt-8 text-gray-500">
          Ainda não há artigos publicados. Volte em breve.
        </p>
      ) : (
        <ul className="mt-10 divide-y divide-gray-200">
          {posts.map((post) => (
            <li key={post.slug} className="py-8 first:pt-0">
              <Link href={`/blog/${post.slug}`} className="group block">
                <h2 className="text-xl font-medium text-gray-900 group-hover:underline">
                  {post.title}
                </h2>
                {post.date && (
                  <time
                    dateTime={post.date}
                    className="mt-1 block text-sm text-gray-500"
                  >
                    {formatDate(post.date)}
                  </time>
                )}
                {post.tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
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
                {post.excerpt && (
                  <p className="mt-3 text-gray-600">{post.excerpt}</p>
                )}
              </Link>
            </li>
          ))}
        </ul>
        )}
        </Wrapper>
    </div>
  );
}
