import { Clock, HeartHandshake, MapPinned } from "lucide-react";
import { restaurant, specialties } from "../data";

export default function About() {
  return (
    <>
      <section className="story section" id="historia">
        <div>
          <p className="section-kicker">Historia</p>
          <h2>Un restaurante pensado para volver cada semana.</h2>
        </div>
        <p>En <strong>la casa del sabor</strong> cuidamos ese momento entre desayuno y comida: ingredientes honestos, atención rápida y una experiencia limpia, moderna y cómoda para familias, parejas y pedidos para llevar.</p>
      </section>
      <section className="specialties section" id="especialidades">
        {specialties.map((item, index) => {
          const Icon = [HeartHandshake, Clock, MapPinned][index];
          return <article className="specialty-card" key={item.title}><Icon aria-hidden="true" /><h3>{item.title}</h3><p>{item.text}</p></article>;
        })}
        <article className="specialty-card dark"><span>{restaurant.rating}</span><h3>Rating en Google</h3><p>Proyecto listo para crecer con reseñas reales y prueba social desde Google Maps.</p></article>
      </section>
    </>
  );
}
