import React from "react";
import Avatar from "./Avatar";
import Link from "next/link";
import Image from "next/image";
import Post, { Category } from "../../../sanity/sanity-utils";

const BlogCard = ({ post }: any) => {
  const { title, publishedAt, author, mainImage, categories, slug } = post;
  // Initialize the router

  console.log(post);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 md:mb-0">
      <Link href={`/blogs/${slug.current}`} passHref>
        <Image
          src={mainImage && mainImage.asset.url}
          alt={mainImage && mainImage.alt}
          className="w-full h-48 object-cover"
          width={300}
          height={300}
        />
      </Link>
      <Link href={`/blogs/${slug.current}`} passHref>
        <div className="p-4">
          <h2 className="text-lg md:text-xl font-semibold mb-2">{title}</h2>
          <div className="my-3">
            <p className="text-sm text-gray-600 mb-2">
              Published on {new Date(publishedAt).toLocaleString()}
            </p>
            <Avatar
              username={author.name}
              src={author.image.asset.url}
              height={30}
              width={30}
              alt={`${author.name}'s image`}
              size="sm"
            />
          </div>

          <div className="flex flex-wrap">
            {categories.map((category: Category) => (
              <span
                key={category.title}
                className="bg-gray-200 text-gray-800 text-xs md:text-sm px-2 py-1 rounded-full mr-2 mb-2"
              >
                {category.title}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
