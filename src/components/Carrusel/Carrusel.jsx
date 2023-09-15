import React, { useState } from 'react';
import './Carrusel.css';

const Carrusel = ({ productoObj }) => {
  const listProducts = productoObj.productos;
  const [currentIndex, setCurrentIndex] = useState(0); // Initialize with 0

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? listProducts.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === listProducts.length - 1 ? 0 : prevIndex + 1));
  };
  console.log(listProducts);
  return (
    <>
      <h2>Generaciones:</h2>
    <div className="carrusel">
      {listProducts.map(produt => (
        <img src={produt.img} alt="" />
      ))}
      {/* <button className="arrow-button left" onClick={goToPreviousSlide}>
        &lt;
      </button> */}
      <div className='carrusel_img'>
      {/* {listProducts.length > 0 ?  */}
        {/* <img src={listProducts[currentIndex].img} alt={`Image ${listProducts[currentIndex].modelo}`} /> : null } */}
        {/* <h3>{listProducts[currentIndex].modelo}</h3> */}
      </div>
      {/* <button className="arrow-button right" onClick={goToNextSlide}> */}
        {/* &gt; */}
      {/* </button> */}
    </div>
        </>
  );
};

export default Carrusel;
