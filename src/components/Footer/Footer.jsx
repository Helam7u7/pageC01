import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer_cont servicios'>
        <h2>Productos</h2>
        <ul>
          <li>📱 Iphone's</li>
          <li>💻 Mac</li>
          <li>🎧 AirPods</li>
          <li>🔋 Cargadores</li>
        </ul>
        <h3>"Ofrecemos venta de productos Apple"</h3>
      </div>
      <div className='footer_cont contacto'>
        <h2>Contáctanos</h2>
        <div className='contacto_num'>
          <div className='num_img'><img src="/img/icons/whatsapp.png" alt="" /></div>
          <h3 className='num_txt'>+51 995894477</h3>
        </div>
          <div className='contacto_num'>
          <div className='num_img'><img src="/img/icons/whatsapp.png" alt="" /></div>
          <h3 className='num_txt'>+51 962848631</h3>
        </div>
        <div className='qr_img'>
          <img src="/img/icons/qr/qr1.jpeg" alt="" />
          <img src="/img/icons/qr/qr2.jpeg" alt="" />
        </div>
      </div>
        <div>
      </div>
      <div className='footer_cont eslogan'>
        <h2 className='eslogan_txt'>¡Porque ser genial nunca pasas de moda!</h2>
        <div className='eslogan_img'><img src="/img/logo del cliente 1.png" alt="" /></div>
      </div>
    </div>
  )
}

export default Footer