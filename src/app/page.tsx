import Image from "next/image";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import JumbotronImg from "./components/JumbotronImg";
import Client from "./components/Client";
import Services from "./components/Services";
import Expectations from "./components/Expectations";
import Portfolio from "./components/Portfolio";
import TeamsSection from "./components/TeamsSection";
import Clients from "./components/Clients";
import ClientsLogoTicker from "./components/ClientsLogoTicker";
import Ready from "./components/Ready";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <header>
        <Header />
      </header>
      <section className="relative h-full">
        <Jumbotron />
        <JumbotronImg />
      </section>
      <article>
        <Client />
      </article>
      <section className="bg-custom-black flex items-center justify-center w-screen">
        <Services />
      </section>
      <section className="flex items-center justify-center bg-custom-black w-screen">
        <Expectations />
      </section>
      <section className="bg-custom-black flex justify-center w-screen">
        <TeamsSection />
      </section>
      <section className="bg-custom-black flex flex-col items-center justify-center w-screen h-full">
        <Clients />
        <ClientsLogoTicker />
      </section>
      <section className="bg-custom-black flex justify-center w-screen">
        <Ready />
      </section>
      <section className="bg-custom-black flex justify-center w-screen">
        <Footer />
      </section>
    </main>
  );
}
