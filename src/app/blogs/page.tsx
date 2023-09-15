import React from "react";
import { fetchAllBlogPosts } from "../../../sanity/sanity-utils";
import BlogCard from "../components/BlogCard";

const Blogs = async () => {
  const blogPosts = await fetchAllBlogPosts();

  return (
    <div className="h-screen p-20">
      <div className="mb-10">
        <h1 className="text-5xl text-center">Recent blog posts</h1>
      </div>
      <div className="flex">
        {blogPosts != undefined &&
          blogPosts.map((item, index) => {
            return <BlogCard post={item} key={index} />;
          })}
      </div>
    </div>
  );
};

export default Blogs;
