import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='container_navbar'>
      <div className='navbar_img'>
        <img src="/img/LogoCliente.png" alt="" />
      </div>
      <div className='navbar_list'>
        <ul className='list_links'>
          <li>Laptos</li>
          <li>Celulares</li>
          <li>Audífonos</li>
          <li>Cargadores</li>
        </ul>
      </div>
    </nav>

  )
}

export default Navbar