import { ViewContainer } from "@/shared/components";
import { ArticleCard } from "@/shared/components/ArticleCard";

export const HomeScreen = () => {
  return (
    <>
      <ViewContainer>
        <ArticleCard
          article={{
            id: "1",
            imgSrc: "https://picsum.photos/200/280",
            slug: "Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua Ut Enim Ad Minim Veniam",
            title: "The Future of Technology: Innovation and Trends",
            date: new Date(),
            url: "/article-1",
            author: {
              id: "1",
              name: "Author 1",
              imgSrc: "https://picsum.photos/200/280",
            },
            tags: [],
          }}
        />
      </ViewContainer>
      <ViewContainer />
      <ViewContainer />
      <ViewContainer />
      <ViewContainer />
      <ViewContainer />
    </>
  );
};
