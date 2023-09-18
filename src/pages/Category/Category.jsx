import { useEffect, useState } from 'react'
import './Category.css'
import { useParams } from 'react-router-dom'
import Carrusel from '../../components/Carrusel/Carrusel'

const Category = ({categories_data}) => {
  const arrayCat = categories_data.categorias

  const {categoria} = useParams()
  const filteredProducts = arrayCat.find((category) => category.categoria === categoria);
  console.log(filteredProducts);

  return (
    <>
    <div></div>
    <div>
        <Carrusel productoObj = {filteredProducts}
                  categoria = {categoria}/>
      </div>
    </>

  );
}

export default Category