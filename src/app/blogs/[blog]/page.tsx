import { useLoaderData, json, Link } from '@vercel/edge-functions-ui';
import { getBlogPost, fetchAdsByCategory } from "../../../../sanity/sanity-utils";
import marketingImg from "../../assets/digitalmkt.jpg";
import Avatar from "@/app/components/Avatar";
import { format } from "date-fns";
import Image from 'next/image';

export default function Blog() {
  const { params } = useLoaderData();
  const slug = params.blog;

  const fetchData = async () => {
    try {
      // Fetch blog post data
      const blogPost = await getBlogPost(slug);

      // Fetch ads based on the first category title
      if (blogPost?.categories && blogPost.categories[0]) {
        const title = blogPost.categories[0].title;
        const ads = await fetchAdsByCategory(title);

        return { blogPost, ads };
      }
    } catch (error) {
      // Handle errors
      console.error("Error:", error);
    }

    return { blogPost: null, ads: [] };
  };

  const { blogPost, ads } = fetchData();

  if (!blogPost) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Header and Footer components here */}
      <section className="w-full h-full p-20 bg-white text-black">
        <div className="">
          <div>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold capitalize">
              {blogPost.title}
            </h1>
            <div className="flex mt-4 ml-4">
              <div className="flex items-center">
                <Avatar
                  src={blogPost.author.image.asset.url}
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
              <PortableText value={blogPost.body} />
            </div>
          </div>
          {ads && ads.length > 0 && (
            <div className="bg-custom-black h-auto p-10 mt-20 flex items-center rounded-xl text-white">
              <div>
                <h1 className="text-6xl uppercase font-bold">
                  {ads[0].title}
                </h1>
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
      </section>
      {/* Footer component here */}
    </div>
  );
}
