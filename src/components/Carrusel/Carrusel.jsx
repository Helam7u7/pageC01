import React, { useState } from 'react';
import './Carrusel.css';

const Carrusel = ({ productoObj }) => {
  const listProducts = productoObj.productos;
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? listProducts.length - 2 : prevIndex - 2
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === listProducts.length - 2 ? 0 : prevIndex + 2
    );
  };

  return (
    <div className="carrusel-container">
      <button className="prev-button" onClick={prevSlide}>
        &#8249;
      </button>
      <button className="next-button" onClick={nextSlide}>
        &#8250;
      </button>
      <div className="carrusel">
        {listProducts.map((product, index) => (
          <div
            key={product.id}
            className={`carrusel-slide ${
              index === currentIndex || index === currentIndex + 1 ? 'active' : ''
            }`}
          >
            <img src={product.img} alt={product.modelo} />
            <h3>{product.modelo}</h3>
            <p>{product.color}</p>
            <p>{product.almacenamiento}</p>
            <p>${product.precio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carrusel;
