import Image from "next/image";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import JumbotronImg from "./components/JumbotronImg";
import Services from "./components/Services";
import Expectations from "./components/Expectations";
import Ready from "./components/Ready";
import Footer from "./components/Footer";
import { fetchLandingPageContent } from "../../sanity/sanity-utils";

// StyledSection component

type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

export const StyledSection:React.FC<SectionProps> = ({ children, className })  => {
  return (
    <section className={className}>
      {children}
    </section>
  );
}

export default async function Home() {
  const data = await fetchLandingPageContent();

  
  return (
    <main>
      <header>
        <Header />
      </header>
      <StyledSection className="relative h-full">
        <Jumbotron />
        <JumbotronImg />
      </StyledSection>
      <StyledSection className="bg-custom-black flex items-center justify-center w-screen">
        <Services />
      </StyledSection>
      <StyledSection className="flex items-center justify-center bg-custom-black w-screen">
        <Expectations />
      </StyledSection>
      <StyledSection className="bg-custom-black flex justify-center w-screen">
        <Ready />
      </StyledSection>
      <StyledSection className="bg-custom-black flex justify-center w-screen">
        <Footer />
      </StyledSection>
    </main>
  );
}
