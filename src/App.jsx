import About from "./components/About";
import CompanyLogos from "./components/CompanyLogos";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="h-full">
      <Header />
      <section id="hero">
        <Hero />
      </section>
      <section id="companylogos">
        <CompanyLogos />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      <Footer />
    </div>
  );
}

export default App;
