import Navbar from "../sections/Navbar";
import Hero from "../sections/Hero";
import FeaturedProject from "../sections/FeaturedProject";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";
import Research from "../sections/Research";
import Education from "../sections/Education";
import Certifications from "@/sections/Certifications";
import Footer from "@/sections/Footer";
import Contact from "@/sections/Contact";
import About from "@/sections/About";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <FeaturedProject />
      <Projects />
      <Skills />
      <Education />
      <Certifications />
      <Research />
      <Contact />
      <Footer />
    </>
  );
}