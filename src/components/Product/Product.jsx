import React from 'react'
import './Product.css'

const Product = () => {
  return (
    <div className='container_product'>
      <div className='container_img'>
        <img src="/img/Productos/iphone/Fono2(IPhone-14-pro-Max-morado).png" alt="" />
      </div>
      <div className='container_info'>
        <h2 className='info_title'>Caracteristicas</h2>
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
      <div className='container_shop'>
        <div className='shop_qr'>
          <div className='qr_img'>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALoAAAC6CAMAAAAu0KfDAAAABlBMVEX///8AAABVwtN+AAABxklEQVR4nO3QUZKDQAwD0eT+l94DgJQeCAXOtr4oGKzneb2MMebivHHSX31mbzljkC5d+hT6tj6dIcuQ+vRMDNKlS59I5zX9ZKKQ98QgXbr0X6X3f9P5NEG6dOnSSTGnk6/SpUv/PXrHEXpHHLsa6dKlT6cfq/nuMzdIly59Cv18SMGF9Wci/Y5IvyM301N9quxEshJZAy0sXbr0x9NJWRqXWH2NnnQR0qVLn0XvUL79KqVfFmmULl36FHpC9xBoByFi+ipduvQh9D4ivUllqwvwq5EuXfpEOjoK6NsJxy6iLyxduvRZ9M4lX8mSx7rieenSpQ+hry6z/TdVrl5E/1e6dOmz6H2B/kyI6TmtmhaLy0iXLv3B9FXWauXq5NSyE+nSpT+enupTyEoESto/oKVLl/54emKREemvPqf/tWCQLl36EHpfKYWc54vxLunSpU+hr2Zbn3Dkfb+yPkG6dOnPp79xTtWErmPXIV269Fn0nQ/hTHomK5FeflK6dOmz6O9N+Lgz6/XsoKVLl/6j9PS1V/LFert06dL/A31nUM13J0iXLn0inRfz9JnbM/3ipEuXPpF+DEGInN5bpEuXPpFujDEX5A/WVTvF1c+o+gAAAABJRU5ErkJggg==" alt="" />
          </div>
          <div className='qr_img'>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALoAAAC6CAMAAAAu0KfDAAAABlBMVEX///8AAABVwtN+AAABxklEQVR4nO3QUZKDQAwD0eT+l94DgJQeCAXOtr4oGKzneb2MMebivHHSX31mbzljkC5d+hT6tj6dIcuQ+vRMDNKlS59I5zX9ZKKQ98QgXbr0X6X3f9P5NEG6dOnSSTGnk6/SpUv/PXrHEXpHHLsa6dKlT6cfq/nuMzdIly59Cv18SMGF9Wci/Y5IvyM301N9quxEshJZAy0sXbr0x9NJWRqXWH2NnnQR0qVLn0XvUL79KqVfFmmULl36FHpC9xBoByFi+ipduvQh9D4ivUllqwvwq5EuXfpEOjoK6NsJxy6iLyxduvRZ9M4lX8mSx7rieenSpQ+hry6z/TdVrl5E/1e6dOmz6H2B/kyI6TmtmhaLy0iXLv3B9FXWauXq5NSyE+nSpT+enupTyEoESto/oKVLl/54emKREemvPqf/tWCQLl36EHpfKYWc54vxLunSpU+hr2Zbn3Dkfb+yPkG6dOnPp79xTtWErmPXIV269Fn0nQ/hTHomK5FeflK6dOmz6O9N+Lgz6/XsoKVLl/6j9PS1V/LFert06dL/A31nUM13J0iXLn0inRfz9JnbM/3ipEuXPpF+DEGInN5bpEuXPpFujDEX5A/WVTvF1c+o+gAAAABJRU5ErkJggg==" alt="" />
          </div>
        </div>
        <div className='shop_btn'>
          <img className='wsp' src="https://i0.wp.com/www.jacchigua.org/wp-content/uploads/2017/02/BOTON-WHATSAPP.png?ssl=1" alt="" />
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