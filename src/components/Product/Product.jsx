import React,{useState} from 'react'
import { Link, useParams } from 'react-router-dom';
import './Product.css'

const Product = ({ categories_data }) => {
  
  const { categoria, id } = useParams(); 
  const arrayCat = categories_data.categorias
  const categoriaEncontrada = arrayCat.find(c => c.categoria === categoria);
  console.log(categoriaEncontrada );
  if (!categoriaEncontrada) {
    return <div>Categoría no encontrada</div>;
  }

  // Busca el producto correspondiente en la categoría encontrada
  const productoEncontrado = categoriaEncontrada.productos.find(p => p.id.toString() === id);

  if (!productoEncontrado) {
    return <div>Producto no encontrado</div>;
  }


  return (
    <div className='container_product'>
      <div className='container_img'>
        <img src={productoEncontrado.imgs[0]} alt="" />
      </div>
      <div className='container_info'>  
      <h2>{productoEncontrado.modelo}</h2>
      <div className='container_caract'>
        <h3 className='info_title'>Caracteristicas</h3>
        <ul className='info_list'>
          {productoEncontrado.desc.map(p => (
            <li>{p}</li>
          ))}
        </ul>
      </div>
      <div className='precio'>
        <div className='colorPicker'>
        {productoEncontrado.color.map((colorName) => (
              <div
                className={`color ${colorName.toLowerCase()}`}
                key={colorName}
              ></div>
            ))}
        </div>
        <h3>S/. {productoEncontrado.precio}</h3>
      </div>
      </div>
      <div className='container_shop'>
        <div className='shop_qr'>
          <div className='qr_img'>
            <img src="/img/icons/qr/qr1.jpeg" alt="" />
            <img src="/img/icons/qr/qr2.jpeg" alt="" />
          </div>
          <div className='shop_btn'>
            <Link className='btn' to='https://api.whatsapp.com/send?phone=51995894477' _target="_blank"><img className='wsp' src="https://i0.wp.com/www.jacchigua.org/wp-content/uploads/2017/02/BOTON-WHATSAPP.png?ssl=1" alt="" /></Link>
          </div>
        </div>
        <div className='show_methods'>
          <h2>Metodos de Pago:</h2>
          <div className='methods_img'>
            <div className='img'><img src="/img/icons/bcp.webp" alt="" /></div>
            <div className='img'><img src="/img/icons/yape.webp" alt="" /></div>
          </div>
          <div className='methods_img'>
            <div className='img'><img src="/img/icons/bbva.webp" alt="" /></div>
            <div className='img'><img src="/img/icons/plin.png" alt="" /></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product