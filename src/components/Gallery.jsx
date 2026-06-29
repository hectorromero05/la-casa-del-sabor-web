const photos = ["/galeria1.jpg", "/galeria2.jpg", "/galeria3.jpg"];

export default function Gallery() {
  return <section className="gallery section" id="galeria"><div className="section-heading"><p className="section-kicker">Galería</p><h2>Texturas, color y momentos para compartir.</h2></div><div className="gallery-grid">{photos.map((src, i) => <figure className={`gallery-photo photo-${i + 1}`} key={src}><img src={src} alt={`Platillo destacado ${i + 1} de la casa del sabor`} onError={(e) => e.currentTarget.parentElement.classList.add("image-fallback")} /><figcaption>{["Brunch recién servido", "Mesa casual y luminosa", "Antojos de la casa"][i]}</figcaption></figure>)}</div></section>;
}
