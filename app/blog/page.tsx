import { Metadata } from "next";
import { getSortedPostsMeta } from "@/lib/posts";
import SectionTitle from "@/components/SectionTitle";
import Wrapper from "@/components/Wrapper";
import BlogPostList from "@/components/BlogPostList";

export const metadata: Metadata = {
  title: "Blog | Jade Sibalde",
};

export default function BlogIndexPage() {
  const posts = getSortedPostsMeta();

  return (
    <div className="py-4">
      <Wrapper>
        <SectionTitle titleText="Blog" />

        {posts.length === 0 ? (
          <p className="mt-8 text-gray-500">
            Ainda não há artigos publicados. Volte em breve.
          </p>
        ) : (
          <BlogPostList posts={posts} />
        )}
      </Wrapper>
    </div>
  );
}
