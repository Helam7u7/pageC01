import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer_cont servicios'>
        <h2>Servicios</h2>
        <h3>Ofrecemos venta de productos Apple como:</h3>
        <ul>
          <li>Iphone's</li>
          <li>Mac</li>
          <li>Airpods</li>
          <li>Cargadores</li>
        </ul>
      </div>
      <div className='footer_cont contacto'>
        <h2>Contactanos</h2>
        <div className='contacto_num'>
          <div className='num_img'><img src="/img/icons/whatsapp.png" alt="" /></div>
          <h3 className='num_txt'>9999999999</h3>
        </div>
        <div className='contacto_num'>
          <div className='num_img'><img src="/img/icons/whatsapp.png" alt="" /></div>
          <h3 className='num_txt'>9999999999</h3>
        </div>
      </div>
      <div className='footer_cont eslogan'>
        <p className='eslogan_txt'>Porque ser genial nunca pasas de moda</p>
        <div className='eslogan_img'><img src="/img/logo del cliente 1.png" alt="" /></div>
      </div>
    </div>
  )
}

export default Footer