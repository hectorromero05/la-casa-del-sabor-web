import { MapPin, MessageCircle, Phone } from "lucide-react";
import { restaurant } from "../data";

export default function Location() {
  return <section className="location section" id="ubicacion"><div className="location-copy"><p className="section-kicker">Mapa</p><h2>Estamos en Puerto San Juan, Guadalajara.</h2><p>{restaurant.address}</p><ul><li><Phone size={18}/> {restaurant.phone}</li><li><MapPin size={18}/> Google Maps cerca de mí</li><li><MessageCircle size={18}/> Reservaciones por WhatsApp</li></ul><div className="location-actions"><a className="btn btn-primary" href={restaurant.mapsUrl} target="_blank" rel="noreferrer">Abrir Google Maps</a><a className="btn btn-outline" href={restaurant.whatsappUrl} target="_blank" rel="noreferrer">Escribir por WhatsApp</a></div></div><iframe title="Mapa de la casa del sabor en Guadalajara" src={restaurant.mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /> </section>;
}
