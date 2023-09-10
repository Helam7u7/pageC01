import { useEffect, useState } from 'react'
import './Category.css'
import { useParams } from 'react-router-dom'
import Carrusel from '../../components/Carrusel/Carrusel'

const Category = ({categories_data}) => {
  const arrayCat = categories_data.categorias
  const categoriaPath = useParams()
  const [categoriaActual, setCategoriaActual] = useState({
    id: null,
    categoria: '',
    productos: []
  });

  console.log(categoriaPath.categoria);

  useEffect(() => {
    if (arrayCat.length > 0) {
      const categoria = arrayCat.find(
        (categoria) => categoria.categoria === categoriaPath.categoria
      );
      console.log(categoria);
      setCategoriaActual(categoria);
    }
  }, [arrayCat]);

  return (
    <>
    <div>
        <Carrusel productoObj = {categoriaActual}/>
      </div>
    </>

  );
}

export default Category