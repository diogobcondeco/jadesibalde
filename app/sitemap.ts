import type { MetadataRoute } from "next";
import { getSortedPostsMeta } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getSortedPostsMeta();

  const blogPosts = posts.map((post) => ({
    url: `https://jadesibalde.com/blog/${post.slug}`,
    ...(post.date
      ? { lastModified: new Date(post.date) }
      : {}),
  }));

  return [
    {
      url: "https://jadesibalde.com",
    },
    {
      url: "https://jadesibalde.com/blog",
    },
    ...blogPosts,
  ];
}
