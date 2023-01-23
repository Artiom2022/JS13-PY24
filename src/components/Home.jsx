import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className='container_2'>
        <div className='main_pg '>
          <h2>TechnoMania</h2>
          <nav className='navbar'>
            <ul className='navbar_menu'>
              <li className='menu'><Link>Home</Link></li>
              <li className='menu'><Link>Products</Link></li>
              <li className='menu'><Link>About</Link></li>
              <li className='menu'><Link>Checkout</Link></li>
              <li className='menu'><Link>contact</Link></li>
            </ul>
          </nav>
          <li className='menu'><Link to="/">REGISTER</Link></li>
        </div>
      </div>
      <div className='promotion'>
        <div className='nameSite'>
        <h1>Introducing Web Store</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <img src='https://www.templatemo.com/templates/templatemo_341_web_store/images/templatemo_image_01.png' className='img_home'/>
      </div>
      
    </div>
    
  

  )      
}

export default Home