import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* Divider */}
      <div className="section-divider" />

      {/* Services Section */}
      <Services />

      {/* Divider */}
      <div className="section-divider" />

      {/* Portfolio Section */}
      <Portfolio />

      {/* Divider */}
      <div className="section-divider" />

      {/* Process Section */}
      <Process />

      {/* Divider */}
      <div className="section-divider" />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Divider */}
      <div className="section-divider" />

      {/* Pricing Section */}
      <Pricing />

      {/* Divider */}
      <div className="section-divider" />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
