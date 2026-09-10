"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

type SortOrder = "newest" | "oldest";

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
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<SortOrder>("newest");

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
    const query = searchQuery.trim().toLowerCase();

    const matchingPosts = posts.filter((post) => {
      const matchesTag =
        !selectedTag || post.tags.includes(selectedTag);

      const matchesSearch =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some((tag) => tag.toLowerCase().includes(query));

      return matchesTag && matchesSearch;
    });

    return [...matchingPosts].sort((a, b) => {
      if (!a.date && !b.date) return 0;
      if (!a.date) return 1;
      if (!b.date) return -1;

      const comparison =
        new Date(a.date).getTime() - new Date(b.date).getTime();

      return sortOrder === "newest" ? -comparison : comparison;
    });
  }, [posts, selectedTag, searchQuery, sortOrder]);

  return (
    <>
      <div className="mt-8">
        <label htmlFor="blog-search" className="sr-only">
          Pesquisar artigos
        </label>

        <input
          id="blog-search"
          type="search"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          placeholder="Pesquisar artigos..."
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:border-gray-900"
        />
      </div>

      <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
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

        <div className="flex items-center gap-2 sm:shrink-0">
          <label
            htmlFor="blog-sort"
            className="text-sm text-gray-500"
          >
            Ordenar:
          </label>

          <select
            id="blog-sort"
            value={sortOrder}
            onChange={(event) =>
              setSortOrder(event.target.value as SortOrder)
            }
            className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 outline-none focus:border-gray-900"
          >
            <option value="newest">Mais recentes</option>
            <option value="oldest">Mais antigos</option>
          </select>
        </div>
      </div>

      {filteredPosts.length === 0 ? (
        <p className="mt-8 text-gray-500">
          Não foram encontrados artigos com estes critérios.
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
