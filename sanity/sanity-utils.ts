import {createClient} from '@sanity/client';

// Initialize the client with your project ID and dataset
const client = createClient({
  projectId:  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true, // `false` if you want to ensure fresh data, `true` for cached data
});

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
  `

  const results = await client.fetch(query);
  return results // Assuming there's only one landing page document
}


export async function getBlogPost(slug:string) {
  console.log(slug)
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
  
  
  `
  try {
    const results = await client.fetch(query, {slug});
    console.log(results);
    return results;
  } catch (error) {
    console.error("Error fetching the post:", error);
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
