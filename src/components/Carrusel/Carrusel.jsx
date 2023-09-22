import React, { useState } from 'react';
import './Carrusel.css';
import { Link } from 'react-router-dom';

const Carrusel = ({ productoObj, categoria }) => {
  const listProducts = productoObj.productos;
  const [currentIndex, setCurrentIndex] = useState(0);

  const duplicatedProducts = [...listProducts, ...listProducts]; // Duplica los productos

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? duplicatedProducts.length - 2 : prevIndex - 2));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === duplicatedProducts.length - 2 ? 0 : prevIndex + 2));
  };

  return (
    <>
      <div className='bannerGen'><img src="/img/banner/bannerGen.png" alt="" /></div>
      
      
      <div className="carrusel">
        <button className="carrusel-btn prev" onClick={prevSlide}>
          &lt;
        </button>
        <div className="carrusel-container">
          {duplicatedProducts.slice(currentIndex, currentIndex + 2).map((producto, index) => (
            <div key={index} className="carrusel-item">
              <Link to={`/categoria/${categoria}/${producto.id}`}><img src={producto.img} alt={producto.modelo} /></Link>
              <p>{producto.modelo} {producto.almacenamiento}</p>
              <p className='precio'>S/.{producto.precio}</p>
            </div>
          ))}
        </div>
        <button className="carrusel-btn next" onClick={nextSlide}>
          &gt;
        </button>
      </div>
    </>
  );
};

export default Carrusel;
