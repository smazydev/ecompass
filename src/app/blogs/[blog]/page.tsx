import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { StyledSection } from "@/app/page";
import { PortableText } from "@portabletext/react";
import { format,parseISO} from 'date-fns';

import React from "react";
import { PortableTextInput } from "sanity";
import { getBlogPost } from "../../../../sanity/sanity-utils";
import Avatar from "@/app/components/Avatar";

type BlogProps = {
  params: {
    blog: string;
  };
};


const Blog: React.FC<BlogProps> = async ({ params }) => {
  const slug = params.blog;
  console.log(slug);
  const { title, author, body ,publishedAt,} = await getBlogPost(slug);
  const date = parseISO(publishedAt);
  const formattedDate = format(date,'dd/MM/yyyy');
  
  return (
    <>
      <header>
        <Header />
      </header>
      <StyledSection className=" bg-custom-black flex justify-center w-full px-4 md:px-10 lg:px-20">
        <div className="mt-[3.25rem]  bg-white w-full max-w-screen-xl h-fit p-6 md:p-12 lg:p-20 rounded-[2rem] md:rounded-[4rem] lg:rounded-[6.25rem]">
          <div>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold capitalize">{title}</h1>
            <div className="flex mt-4 ml-4">
              <div className="flex items-center">
                <Avatar
                  src={author.image.asset.url}
                  alt="User's Name"
                  size="large"
                  width={50}
                  username={author.name}
                  height={50}
                />
                <p className="ml-4">on: {formattedDate} </p>
              </div>
             
            </div>
            <div>
                <PortableText value={body}/>
              </div>
          </div>
        </div>
      </StyledSection>
      <Footer />
    </>
  );
};

export default Blog;
