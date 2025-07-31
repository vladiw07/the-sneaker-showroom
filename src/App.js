import Contact from "./components/Contact";
import FeaturedProducts from "./components/FeaturedProducts";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import WhyUs from "./components/WhyUs";

function App() {
  return (
    <div className="App">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="models">
        <FeaturedProducts />
      </section>
      <section id="gallery">
        <WhyUs />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}


export default App;
