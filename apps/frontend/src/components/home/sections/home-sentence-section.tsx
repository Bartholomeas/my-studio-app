import dynamic from "next/dynamic";

const ParagraphReveal = dynamic(() =>
  import("@/components/common/animations/paragraph-reveal").then((res) => res.ParagraphReveal),
);

export const HomeSentenceSection = () => {
  return (
    <section className={"flex min-h-screen items-center justify-center bg-white"}>
      <ParagraphReveal
        className={"container"}
        text={
          "In time, or so I'm told I'm just another soul for sale, oh well The page is out of print We are not permanent, we're temporary, temporary Same old story"
        }
      />
    </section>
  );
};
