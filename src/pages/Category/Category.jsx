import React from 'react'
import './Category.css'

const Category = () => {
  return (
    <div className='container_categories'>
      <div className='list_product'>
        <h2>IPhone X </h2>
        <div className='container_products'>
          <div className='product_card'>
            <div className='card_img'><img src="/img/iphone/fono-1-(IPhone-14-pro-Max-dorrado).png" alt="" /></div>
            <div className='card_info'>
              <h3>IPhone 14 Pro Max</h3>
              <h2>S/. 6,049.00</h2>
            </div>
          </div>
          <div className='product_card'>
            <div className='card_img'><img src="/img/iphone/Fono2(IPhone-14-pro-Max-morado).png" alt="" /></div>
            <div className='card_info'>
              <h3>IPhone 14 Pro Max</h3>
              <h2>S/. 6,049.00</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Category