import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = ({categories_data}) => {
  const categories = categories_data.categorias
  
  return (
    <nav className='container_navbar'>
      <div className='navbar_img'>
        <Link to='/'><img src="/img/LogoCliente.png" alt="" /></Link>
      </div>
      <div className='navbar_list'>
        <ul className='list_links'>
        {categories.map(categoria => (
            <li key={categoria.id}><Link to={`/categoria/${categoria.categoria}`}>{categoria.categoria}</Link></li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar