"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

type Props = {
  posts: PostMeta[];
};

function formatDate(dateString: string) {
  if (!dateString) return "";

  return new Date(dateString).toLocaleDateString("pt-PT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPostList({ posts }: Props) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const tags = useMemo(() => {
    const counts = new Map<string, number>();

    for (const post of posts) {
      for (const tag of post.tags) {
        counts.set(tag, (counts.get(tag) ?? 0) + 1);
      }
    }

    return [...counts.entries()]
      .sort((a, b) => {
        if (b[1] !== a[1]) {
          return b[1] - a[1];
        }

        return a[0].localeCompare(b[0]);
      })
      .slice(0, 8)
      .map(([tag]) => tag);
  }, [posts]);

  const filteredPosts = useMemo(() => {
    if (!selectedTag) {
      return posts;
    }

    return posts.filter((post) => post.tags.includes(selectedTag));
  }, [posts, selectedTag]);

  return (
    <>
      {tags.length > 0 && (
        <div className="mt-8 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setSelectedTag(null)}
            className={`rounded-full px-4 py-2 text-sm ${
              selectedTag === null
                ? "bg-gray-900 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Todos
          </button>

          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setSelectedTag(tag)}
              className={`rounded-full px-4 py-2 text-sm ${
                selectedTag === tag
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      {filteredPosts.length === 0 ? (
        <p className="mt-8 text-gray-500">
          Não foram encontrados artigos com esta tag.
        </p>
      ) : (
        <ul className="mt-10 divide-y divide-gray-200">
          {filteredPosts.map((post) => (
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
    </>
  );
}
