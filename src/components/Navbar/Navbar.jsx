import React,{useState}from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = ({categories_data}) => {
  const categories = categories_data.categorias
  
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <nav className={`container_navbar ${menuOpen ? 'open' : ''}`}>
      <div className='navbar_img'>
        <Link to='/'><img src="/img/LogoCliente.png" alt="" /></Link>
      </div>
      <div className={`navbar_list ${menuOpen ? 'open' : ''}`}>
        <ul className='list_links'>
        {categories.map(categoria => (
            <li key={categoria.id}><Link className='list_link' to={`/categoria/${categoria.categoria}`}>{categoria.categoria}</Link></li>
          ))}
        </ul>
      </div>
      <div className='navbar_burguer' onClick={toggleMenu}><img src="/img/icons/burguer.png" alt="" /></div>
    </nav>
  )
}

export default Navbar