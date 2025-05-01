import dynamic from "next/dynamic";

const BlogMaskedHeader = dynamic(() => import("@/components/features/blog/list/blog-masked-header").then(mod => mod.BlogMaskedHeader));
const BlogCardsContainer = dynamic(() => import("@/components/features/blog/list/blog-cards-container").then(mod => mod.BlogCardsContainer));

const BlogPage = async () => {
  return (
    <main className={"flex min-h-screen flex-col bg-background"}>
      <BlogMaskedHeader />

      <div className={"container"}>
        <BlogCardsContainer />
      </div>
    </main>
  );
};

export default BlogPage;
