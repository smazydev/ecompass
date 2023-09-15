import { StyledSection } from "@/app/page";
import { PortableText } from "@portabletext/react";
import { format } from "date-fns";
import Post, {
  fetchAdsByCategory,
  getBlogPost,
} from "../../../../sanity/sanity-utils";
import marketingImg from "../../assets/digitalmkt.jpg";
import Avatar from "@/app/components/Avatar";
import Image from "next/image";

type BlogProps = {
  params: {
    blog: string;
  };
};

const Blog: React.FC<BlogProps> = async ({ params }) => {
  const slug = params.blog;

  async function fetchData(): Promise<{
    blogPost: Post | null;
    ads: any[] | null;
  }> {
    try {
      // Fetch blog post data and ads concurrently
      const blogPost = await getBlogPost(slug);
      let ads;
      if (blogPost != undefined) {
        ads = await fetchAdsByCategory(blogPost.categories[0].title);
      }
    } catch (error) {
      // Handle errors
      console.error("Error:", error);
    }
    return { blogPost: blogPost, ads: ads };
  }

  const { blogPost, ads } = await fetchData();

  return (
    <>
      {/* Header and Footer components here */}
      <StyledSection className="w-full h-full p-20 bg-white text-black">
        <div className="">
          {blogPost != null && blogPost != undefined && (
            <div>
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold capitalize">
                {blogPost?.title}
              </h1>
              <div className="flex mt-4 ml-4">
                <div className="flex items-center">
                  <Avatar
                    src={blogPost?.author.image.asset.url}
                    alt="User's Name"
                    size="large"
                    width={50}
                    username={blogPost.author.name}
                    height={50}
                  />
                  <p className="ml-4">
                    on: {format(new Date(blogPost.publishedAt), "PPPp")}{" "}
                  </p>
                </div>
              </div>
              <div className="w-4/5">
                <PortableText value={blogPost.body as any} />
              </div>
            </div>
          )}
          {ads && ads.length > 0 && (
            <div className="bg-custom-black h-auto p-10 mt-20 flex items-center rounded-xl text-white ">
              <div>
                <h1 className="text-6xl uppercase font-bold">{ads[0].title}</h1>
                <p className="italic text-2sxl my-5 font-extralight">
                  {ads[0].description}
                </p>
                <button className="w-72 bg-black text-white p-5 rounded-lg">
                  {ads[0].cta}
                </button>
              </div>
              <Image
                src={marketingImg}
                alt={"digital marketing"}
                height={400}
              />
            </div>
          )}
        </div>
      </StyledSection>
      {/* Footer component here */}
    </>
  );
};

export default Blog;
