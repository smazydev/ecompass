import Image from "next/image";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import JumbotronImg from "./components/JumbotronImg";
import Client from "./components/Client";
import Services from "./components/Services";
import Expectations from "./components/Expectations";
import Portfolio from "./components/Portfolio";
import TeamsSection from "./components/TeamsSection";

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
      <section className="bg-custom-black flex justify-center w-screen h-full min-h-screen">
        <TeamsSection />
      </section>
    </main>
  );
}
