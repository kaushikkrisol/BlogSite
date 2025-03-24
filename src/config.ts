import urlJoin from "url-join";
interface Category {
  label: string;
  tag: string;
  description: string;
}

const categories: Category[] = [
  // {
  //   label: "Development Blogs",
  //   tag: "development",
  //   description: "The foundation of tomorrow’s tech is built on AI. Stay informed with our expert insights!",
  // },
  // {
  //   label: "Engineering",
  //   tag: "engineering",
  //   description: "Innovative engineering driving AI advancements.",
  // },
  // {
  //   label: "Jobs",
  //   tag: "jobs",
  //   description: "Explore AI job trends and opportunities shaping a brighter future.",
  // },
  // {
  //   label: "Startups",
  //   tag: "startup",
  //   description: "Spotlight on innovative AI startups transforming industries.",
  // },
  // {
  //   label: "Ethics",
  //   tag: "ethics",
  //   description: "Promoting responsible AI for positive impact.",
  // },
];

console.log("categories",categories);

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.wisp.blog/api/v1/";

export const config = {
  blogId: process.env.NEXT_PUBLIC_BLOG_ID || "cm8e45hwe0000g6hr90eqnbfu",
  baseUrl: baseUrl,
  logoUrl: urlJoin(baseUrl, "logo.png"),
  organization: process.env.NEXT_PUBLIC_BLOG_ORGANIZATION || "Krisol Infosoft Pvt.Ltd",
  title: process.env.NEXT_PUBLIC_BLOG_TITLE || "Krisol Infosoft Blogs",
  description:
    process.env.NEXT_PUBLIC_BLOG_DESCRIPTION ||
    "Where tech meets creativity – building the future, today.",
  categories,
};
