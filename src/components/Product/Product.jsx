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
        <img src={productoEncontrado.img} alt="" />
      </div>
      <div className='container_info'>  
      <h2>{productoEncontrado.modelo}</h2>
      <div className='container_caract'>
        <h3 className='info_title'>Caracteristicas</h3>
        <ul className='info_list'>
          <li>iOS 14 con widgets rediseñados en la pantalla de inicio, nueva Biblioteca de Apps, App Clips y mucho más.</li>
          <li>Carga inalámbrica.</li>
          <li>Sistema de dos cámaras de 12 MP (ultra gran angular y gran angular) con modo Noche, modo Retrato y video 4K de hasta 60 cps.</li>
          <li>Pantalla LCD Liquid Retina HD de 6.1 pulgadas.</li>
          <li>Chip A13 Bionic con Neural Engine de tercera generación.</li>
          <li>Face ID para una autenticación segura y Apple Pay.</li>
          <li>Carga rápida</li>
          <li>Clasificación IP68 de resistencia al agua y al polvo (hasta 30 minutos a una profundidad máxima de 2 metros).</li>
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
          </div>
          <div className='qr_img'>
            <img src="/img/icons/qr/qr2.jpeg" alt="" />
          </div>
        </div>
        <div className='shop_btn'>
          <Link to='https://api.whatsapp.com/send?phone=51995894477' _target="_blank"><img className='wsp' src="https://i0.wp.com/www.jacchigua.org/wp-content/uploads/2017/02/BOTON-WHATSAPP.png?ssl=1" alt="" /></Link>
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