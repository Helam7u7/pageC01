import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <>
      <div className='container_banner'>
        <img src="/img/banner/portada1.png" alt="" className="desktop-image"/>
        <img src="/img/banner/portada2.png" alt="" className="mobile-image"/>
        <img src="/img/banner/portada3.png" alt="" className="tableta-image"/>
      </div>
    </>
  )
}

export default Home