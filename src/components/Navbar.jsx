import { MapPin, Menu as MenuIcon, X } from "lucide-react";
import { useState } from "react";
import { restaurant } from "../data";

const links = [
  ["Historia", "#historia"],
  ["Especialidades", "#especialidades"],
  ["Menú", "#menu"],
  ["Galería", "#galeria"],
  ["Ubicación", "#ubicacion"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar" aria-label="Navegación principal">
      <a className="brand" href="#inicio" aria-label="Ir al inicio">
        <img src="/logo.png" alt="Logo la casa del sabor" onError={(e) => (e.currentTarget.style.display = "none")} />
        <span>la casa del sabor</span>
      </a>
      <button className="nav-toggle" aria-label={open ? "Cerrar menú" : "Abrir menú"} onClick={() => setOpen(!open)}>
        {open ? <X size={22} /> : <MenuIcon size={22} />}
      </button>
      <div className={`nav-links ${open ? "is-open" : ""}`}>
        {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="nav-cta" href={restaurant.mapsUrl} target="_blank" rel="noreferrer"><MapPin size={17} /> Cómo llegar</a>
      </div>
    </nav>
  );
}
