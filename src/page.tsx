import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import Industries from "./components/Industries";
import Testimonials from "./components/Testimonials";
import Tools from "./components/Tools";
import Contact from "./components/Contact";
import Footer from "./components/Footer";



export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      {/* HEADER SECTION */}
      <Header />

      {/* HERO SECTION */}
      <Hero />

      {/* ABOUT SECTION */}
      <About />

      {/* SERVICES SECTION */}
      <Services />
      {/* Tools */}
      <Tools />
      {/* HOW IT WORKS SECTION */}
      <HowItWorks />

      {/* INDUSTRIES SECTION */}
      <Industries />

      {/* TESTIMONIALS SECTION
      <Testimonials /> */}

      {/* CONTACT SECTION */}
      <Contact />

      {/* FOOTER SECTION */}
      <Footer />
    </div>
  );
}
