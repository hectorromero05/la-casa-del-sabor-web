import { Utensils } from "lucide-react";
import { menuItems } from "../data";

export default function Menu() {
  return <section className="menu-section section" id="menu"><p className="section-kicker">Menú</p><h2>Favoritos para brunch y antojo.</h2><div className="menu-grid">{menuItems.map((item) => <article className="menu-item" key={item.title}><div className="menu-icon"><Utensils size={18}/></div><div><h3>{item.title}</h3><p>{item.desc}</p></div><strong>{item.price}</strong></article>)}</div></section>;
}
