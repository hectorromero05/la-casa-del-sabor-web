import { ArrowRight, MessageCircle, Star } from "lucide-react";
import { restaurant } from "../data";

export default function Hero() {
  return (
    <header className="hero" id="inicio">
      <div className="hero-bg" role="img" aria-label="Mesa de brunch en la casa del sabor" />
      <div className="hero-content reveal">
        <p className="eyebrow"><Star size={16} fill="currentColor" /> Restaurante de brunch · Guadalajara</p>
        <h1>Brunch con alma casera y presentación memorable.</h1>
        <p className="hero-copy">Conoce <strong>la casa del sabor</strong>: un punto cálido para desayunar, brunchear, reservar por WhatsApp y llegar sin perderte.</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href={restaurant.whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={19} /> Reservar por WhatsApp</a>
          <a className="btn btn-ghost" href="#menu">Ver menú <ArrowRight size={18} /></a>
        </div>
      </div>
      <aside className="hero-card" aria-label="Resumen del restaurante">
        <span>{restaurant.rating} ★</span>
        <strong>Sabor fresco, trato cercano</strong>
        <p>{restaurant.address}</p>
      </aside>
    </header>
  );
}
