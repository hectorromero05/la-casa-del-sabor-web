import { Quote, Star } from "lucide-react";
import { restaurant } from "../data";

const testimonials = [
  "Un lugar nuevo para descubrir brunch en Guadalajara con atención directa por WhatsApp.",
  "La ubicación es práctica y el concepto se siente cálido, limpio y familiar.",
  "Ideal para desayunar rico, pedir rápido y guardar el mapa para la próxima visita.",
];

export default function Testimonials() {
  return <section className="testimonials section"><div className="section-heading"><p className="section-kicker">Reseñas</p><h2>Prueba social lista para despegar.</h2><p>Actualmente Google muestra {restaurant.rating} de rating y {restaurant.reviews}; por eso usamos mensajes de expectativa mientras llegan las primeras opiniones verificadas.</p></div><div className="testimonial-grid">{testimonials.map((text) => <article className="testimonial" key={text}><Quote size={24}/><div className="stars">{Array.from({length:5}).map((_,i)=><Star key={i} size={15} fill="currentColor" />)}</div><p>{text}</p><strong>Cliente local</strong></article>)}</div></section>;
}
