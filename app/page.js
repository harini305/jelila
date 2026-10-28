import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Healing from "./components/Healing";
import Testimonials from "./components/Testimonials";
import Creations from "./components/Creations";
import Faq from "./components/Faq";
import Connect from "./components/Connect";
import Motion from "./components/Motion";
import { DecorDefs } from "./components/Decor";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <DecorDefs />
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Healing />
        <Testimonials />
        <Creations />
        <Faq />
        <Connect />
      </main>
      <Motion />
    </>
  );
}
