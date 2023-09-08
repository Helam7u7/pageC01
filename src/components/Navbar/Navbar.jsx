import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='container_navbar'>
      <div className='navbar_img'>
        <Link to='/'><img src="/img/LogoCliente.png" alt="" /></Link>
      </div>
      <div className='navbar_list'>
        <ul className='list_links'>
          <li><Link to="/Category">Laptos</Link></li>
          <li><Link to="/Category">Celulares</Link></li>
          <li><Link to="/Category">Audífonos</Link></li>
          <li><Link to="/Category">Cargadores</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar