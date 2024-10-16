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
    <div className="h-auto">
      <Header />
      <Hero />
      <CompanyLogos />
      <About />
      <Features />
      <Services />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
