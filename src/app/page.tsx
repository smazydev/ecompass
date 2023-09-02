import Image from "next/image";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import JumbotronImg from "./components/JumbotronImg";
import Services from "./components/Services";
import Expectations from "./components/Expectations";
import Ready from "./components/Ready";
import Footer from "./components/Footer";
import { fetchLandingPageContent } from "../../sanity/sanity-utils";
import Navigation from "./components/new-landing/Navigation";
import Hero from "./components/new-landing/Hero";
import Partners from "./components/new-landing/Partners";
import HowItWorks from "./components/new-landing/HowItWorks";

// StyledSection component

type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

export const StyledSection: React.FC<SectionProps> = ({
  children,
  className,
}) => {
  return <section className={className}>{children}</section>;
};

export default async function Home() {
  //  const data = await fetchLandingPageContent();
  // return (
  //   <main>
  //     <header>
  //       <Header />
  //     </header>
  //     <StyledSection className="cursor-[url('/assets/cursor.svg'), auto] bg-white relative h-full">
  //       <Jumbotron />
  //       <JumbotronImg />
  //     </StyledSection>
  //     <StyledSection className="bg-white flex items-center justify-center w-screen">
  //       <Services />
  //     </StyledSection>
  //     <StyledSection className="flex items-center justify-center bg-white w-screen">
  //       <Expectations />
  //     </StyledSection>
  //     <StyledSection className="bg-white flex justify-center w-screen">
  //       <Ready />
  //     </StyledSection>
  //     <StyledSection className="bg-white flex justify-center w-screen">
  //       <Footer />
  //     </StyledSection>
  //   </main>
  // );

  return (
    <>
      <main>
        <Navigation />
      </main>
      <Hero />
      <Partners />
      <HowItWorks />
      <Services />
      <Ready />

      <Footer />
    </>
  );
}
