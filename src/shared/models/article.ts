import { Author } from "./author";

export interface ArticleItem {
  id: string;
  imgSrc?: string;
  slug: string;
  title: string;
  date: Date;
  url: string;
  author: Author;
  tags: string[];
}
