import React, { useState, useEffect } from 'react';
import './Carrusel.css';
import { Link } from 'react-router-dom';

const Carrusel = ({ productoObj, categoria }) => {
  const listProducts = productoObj.productos;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500); // Inicializa isMobile con el valor actual

  const duplicatedProducts = [...listProducts, ...listProducts]; // Duplica los productos

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? duplicatedProducts.length - (isMobile ? 1 : 2) : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === duplicatedProducts.length - (isMobile ? 1 : 2) ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500);
    };

    // Agregar un listener para detectar cambios en el tamaño de la ventana
    window.addEventListener('resize', handleResize);

    // Llamar a handleResize inicialmente para determinar el estado móvil
    handleResize();

    // Eliminar el listener al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className='bannerGen'><img src="/img/banner/xdxd.png" alt="" /></div>

      <div className={`carrusel${isMobile ? ' mobile' : ''}`}>
        <button className="carrusel-btn prev" onClick={prevSlide}>
          &lt;
        </button>
        <div className="carrusel-container">
          {duplicatedProducts.slice(currentIndex, currentIndex + (isMobile ? 1 : 2)).map((producto, index) => (
            <div key={index} className="carrusel-item">
              <Link to={`/categoria/${categoria}/${producto.id}`}>
                <img src={producto.imgMain} alt={producto.modelo} />
              </Link>
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
