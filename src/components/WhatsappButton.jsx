import { MessageCircle } from "lucide-react";
import { restaurant } from "../data";

export default function WhatsappButton() {
  return <a className="whatsapp-float" href={restaurant.whatsappUrl} target="_blank" rel="noreferrer" aria-label="Reservar por WhatsApp"><MessageCircle size={28}/></a>;
}
