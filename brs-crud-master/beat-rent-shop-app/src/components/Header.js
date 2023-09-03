// src/components/Header.js
import React from 'react';


const Header = () => {
  const fondoPersonalizado = {
    backgroundImage: 'url("https://assets-static-prod.displate.com/next-assets/public/images/pdp/HeroSlider/alone/bcg/1_bg_desktop.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh', 
    opacity: 0.8,
  };

  return (
    <div style={fondoPersonalizado}>
      {/* Encabezado */}
      <header className="header">
        <h1>Bienvenido a la Tienda de renta y venta de celulares último modelo</h1>
        <p>Tu destino para videojuegos y celulares.</p>
      </header>

      {/* Sección de Videojuegos */}
      <section className="product-section">
        <div className="product-container">
          <div className="product-image">
            <img src="https://eip.gg/wp-content/uploads/2023/06/Starfield-Developer-Direct-Xbox-Games-Showcase-Trailer.png"
            className="img-fluid img-thumbnail" alt="Celular 1" style={{ width: '500px', height: '350px' }} />
          </div>
          <div className="product-details">
            <h2 className="product-title">Videojuego más reciente de nuestro catálogo</h2>
            <p className="product-description">Videojuego en el que navegas por el espacio, puedes crear tu propia ruta y explorar los diferentes universos.</p>
            <p className="product-price">$49.99</p>
            <button className="product-button">Alquilar</button>
          </div>
        </div>
        <br/>
        {/* Agrega más productos aquí */}
      </section>

      {/* Sección de Celulares */}
      <section className="product-section">
        <div className="product-container">
          <div className="product-image">
            <img src="https://media.wired.com/photos/62d75d34ddaaa99a1df8e61d/master/w_2560%2Cc_limit/Phone-Camera-Webcam-Gear-GettyImages-1241495650.jpg"
            className="img-fluid img-thumbnail" alt="Celular 1" style={{ width: '500px', height: '350px' }} />
          </div>
          <div className="product-details">
            <h2 className="product-title">Celular más reciente de nuestro catálogo</h2>
            <p className="product-description">Conoce al IPhone pro max con su nueva cámara ultra HD que captura toda tu belleza.</p>
            <p className="product-price">$299.99</p>
            <button className="product-button">Comprar</button>
          </div>
        </div>

        {/* Agrega más productos aquí */}
      </section>
      <br/>
      {/* Pie de Página */}
      <footer className="bg-light text-lg-start">
        <div className="text-center p-3">
          © 2023 Copyright:
          <a className="text-dark" href="https://github.com/Alfredo1893/Repositorio.git">Repositorios de Roberto Marroquín</a>
        </div>
      </footer>
    </div>
  );
};

export default Header;
