import { Home, MapPin, MessageCircle } from "lucide-react";
import { restaurant } from "../data";

export default function Footer() {
  return <footer className="footer"><div><h2>la casa del sabor</h2><p>Brunch moderno, casero y fácil de reservar en Guadalajara.</p></div><div className="footer-links"><a href={restaurant.whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={18}/> WhatsApp</a><a href={restaurant.mapsUrl} target="_blank" rel="noreferrer"><MapPin size={18}/> Google Maps</a><a href="#inicio"><Home size={18}/> Inicio</a></div><p className="copyright">© 2026 la casa del sabor. Todos los derechos reservados.</p></footer>;
}
