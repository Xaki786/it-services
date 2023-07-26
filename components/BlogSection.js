/** @format */

import BlogHighlights from "./BlogHighlights";
const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      title: "Blog Post Title 1",
      imageSrc: "/images/blog-post-1.jpg",
      excerpt:
        "Nostrud laborum cillum adipisicing quis est deserunt Lorem consectetur consectetur exercitation reprehenderit.",
      link: "#",
    },
    {
      id: 2,
      title: "Blog Post Title 2",
      imageSrc: "/images/blog-post-2.jpg",
      excerpt:
        "Nostrud laborum cillum adipisicing quis est deserunt Lorem consectetur consectetur exercitation reprehenderit.",
      link: "#",
    },
    {
      id: 3,
      title: "Blog Post Title 3",
      imageSrc: "/images/blog-post-3.jpg",
      excerpt:
        "Nostrud laborum cillum adipisicing quis est deserunt Lorem consectetur consectetur exercitation reprehenderit.",
      link: "#",
    },
  ];
  return <BlogHighlights blogs={blogs} />;
};

export default BlogSection;
