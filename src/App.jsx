import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Location from "./components/Location";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import WhatsappButton from "./components/WhatsappButton";
import { restaurant } from "./data";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Testimonials />
        <Location />
        <section className="final-cta section" aria-labelledby="cta-title">
          <p className="section-kicker">Reserva hoy</p>
          <h2 id="cta-title">Tu próximo brunch está a un mensaje.</h2>
          <p>Guarda la ruta, escríbenos por WhatsApp y ven a probar una experiencia cercana, limpia y llena de sabor.</p>
          <a className="btn btn-primary" href={restaurant.whatsappUrl} target="_blank" rel="noreferrer">Quiero reservar ahora</a>
        </section>
      </main>
      <Footer />
      <WhatsappButton />
    </div>
  );
}
