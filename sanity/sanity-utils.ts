import { createClient } from "@sanity/client";

// Initialize the client with your project ID and dataset
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true, // `false` if you want to ensure fresh data, `true` for cached data
});

interface Author {
  name: string;
  description: string;
  image: {
    asset: {
      _id: string;
      url: string;
    };
    alt: string;
  };
}

interface Category {
  title: string;
  description: string;
}

interface Block {
  // Define the properties for block items as needed
}

export interface Post {
  title: string;
  slug: string;
  publishedAt: string;
  author: Author;
  mainImage: {
    asset: {
      _id: string;
      url: string;
    };
    alt: string;
  };
  categories: Category[];
  body: {
    // Define properties for body blocks as needed
    blocks: Block[];
  }[];
}

export default Post;

// Function to fetch landing page content
export async function fetchLandingPageContent() {
  const query = `
  *[_type == "landingPage"] {
    brandName,
    jumbotron {
      heading,
      image1 {
        asset->,
        alt
      },
      description,
      ctaButton,
      image2 {
        asset->,
        alt
      }
    },
    services {
      heading,
      services
    },
    howItWorks {
      title,
      images[] {
        asset->,
        alt
      },
      steps[] {
        stepNumber,
        stepTitle,
        description
      }
    },
    clientTestimonial,
    cta,
    footerText
  }
  `;

  const results = await client.fetch(query);
  return results; // Assuming there's only one landing page document
}

export async function getBlogPost(slug: string):Promise<Post | undefined> {
  console.log(slug);
  const query = `
  *[_type == "post" && slug.current == $slug][0]{
    title,
    slug,
    publishedAt,
    author->{
      name,
      description,
      image{
        asset->{
          _id,
          url
        },
        alt
      }
    },
    mainImage{
      asset->{
        _id,
        url
      },
      alt
    },
    categories[]->{
      title,
      description
    },
    body[]{
      ...,
      "blocks": of[]{
        ...,
        marks,
        "link": marks.link.href
      }
    }
  }
  
  
  `;
  try {
    const results = await client.fetch(query, { slug });
    console.log(results);
    return results;
  } catch (error) {
    console.error("Error fetching the post:", error);
  }
}

export async function fetchAllBlogPosts():Promise<Post[] | undefined> {
  const query = `
  *[_type == "post"] {
    title,
    slug,
    publishedAt,
    author->{
      name,
      description,
      image{
        asset->{
          _id,
          url
        },
        alt
      }
    },
    mainImage{
      asset->{
        _id,
        url
      },
      alt
    },
    categories[]->{
      title,
      description
    },
    body[]{
      ...,
      "blocks": of[]{
        ...,
        marks,
        "link": marks.link.href
      }
    }
  }
  `;

  try {
    const results = await client.fetch(query);
    return results;
  } catch (error) {
    console.error("Error fetching blog posts:", error);
  }
}
// Example usage in a Next.js page or API route:
/*
export async function getStaticProps() {
  const landingPageData = await fetchLandingPageContent();
  return {
    props: {
      landingPageData
    }
  };
}
*/
export async function fetchAdsByCategory(ct: string) {
  try {
    // Fetch ads based on the specified category title
    console.log("came here", ct);
    if (ct != undefined) {
      const ads = await client.fetch(
        `*[_type == "ad"]{
          ...,
          "category": *[_type == "category" && category.title == '${ct}']
  }
        `,
      );
     console.log(ads)
      return ads;
    }
  } catch (error) {
    console.error("Error fetching ads by category:",error);
    // throw error;
  }
}
