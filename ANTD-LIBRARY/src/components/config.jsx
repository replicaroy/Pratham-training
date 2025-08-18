import Home from "../navlink/Home";
import Home2 from "../navlink/Home2";
import Home3 from "../navlink/Home3";
import ArticlesSection from "./ArticleSection";

// add components for other nav items if you want

export const navLinks = [
  { label: "Home", componentKey: "Home" },
  { label: "Home 2", componentKey: "Home2" },
  { label: "Home 3", componentKey: "Home3" },
  { label: "Articles List", componentKey: "ArticlesSection" },
  { label: "Search", componentKey: "SearchSection" },
  { label: "FAQs", componentKey: null },
  { label: "Skins", componentKey: null },
  { label: "More", componentKey: null },
  { label: "Contact", componentKey: null },
];




export const articles = {
  featured: [
    { title: "Integrating WordPress with Your Website", date: "25 Feb, 2013", category: "Server & Database", likes: 66 },
    { title: "WordPress Site Maintenance", date: "24 Feb, 2013", category: "Website Dev", likes: 15 },
    { title: "Meta Tags in WordPress", date: "23 Feb, 2013", category: "Website Dev", likes: 8 },
    { title: "WordPress in Your Language", date: "22 Feb, 2013", category: "Advanced Techniques", likes: 6 },
    { title: "Know Your Sources", date: "22 Feb, 2013", category: "Website Dev", likes: 2 },
    { title: "Validating a Website", date: "21 Feb, 2013", category: "Website Dev", likes: 3 },
  ],
  latest: [
    { title: "Integrating WordPress with Your Website", date: "25 Feb, 2013", category: "Server & Database", likes: 66 },
    { title: "Using Javascript", date: "25 Feb, 2013", category: "Advanced Techniques", likes: 18 },
    { title: "Using Images", date: "25 Feb, 2013", category: "Designing in WordPress", likes: 7 },
    { title: "Using Video", date: "24 Feb, 2013", category: "WordPress Plugins", likes: 7 },
    { title: "WordPress Site Maintenance", date: "24 Feb, 2013", category: "Website Dev", likes: 15 },
    { title: "WordPress CSS Information and Techniques", date: "24 Feb, 2013", category: "Theme Development", likes: 1 },
  ],
};

export const supportText = "Need more support? If you did not found an answer, contact us for further help.";

export const quickLinks = [
  { label: "Home", href: "#" },
  { label: "FAQs", href: "#" },
  { label: "Articles List", href: "#" },
  { label: "Contact", href: "#" },
];

export const tags = [
  "basic", "beginner", "blogging", "colour", "css", "date",
  "design", "files", "format", "header", "images", "plugins",
  "setting", "templates", "theme", "time", "videos", "website",
  "wordpress",
];

export const categories = [
  {
    title: "WordPress for Beginners",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat",
  },
  {
    title: "Designing in WordPress",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet",
  },
  {
    title: "Theme Development",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna",
  },
  {
    title: "Website Dev",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam",
  },
  {
    title: "WordPress Plugins",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore",
  },
  {
    title: "Advanced Techniques",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut",
  },
];

export const footerCategories = [
  "Advanced Techniques",
  "Designing in WordPress",
  "Server & Database",
  "Theme Development",
  "Website Dev",
  "WordPress for Beginners",
  "WordPress Plugins",
];