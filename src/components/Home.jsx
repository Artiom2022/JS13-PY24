import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>

{/* navbar */}


<div className='container_2'>
        <div className='main_pg '>
          <h2>TechnoMania</h2>
          <nav className='navbar'>
            <ul className='navbar_menu'>
              <li className='menu'><Link to="/home">Home</Link></li>
              <li className='menu'><Link to="/products">Products</Link></li>
              <li className='menu'><Link>About</Link></li>
              <li className='menu'><Link>Checkout</Link></li>
              <li className='menu'><Link to="/contacts">contacts</Link></li>
            </ul>
          </nav>
          <li className='menu'><Link to="/">REGISTER</Link></li>
        </div>
      </div>

{/* header */}

      <div className='promotion'>
        <div className='nameSite'>
        <h1>Introducing Web Store</h1>
        <h3>Куда вы попали ?</h3>
        <p>Спокойно, это TehnoMania</p>
        </div>
        <img src='https://www.templatemo.com/templates/templatemo_341_web_store/images/templatemo_image_01.png' className='img_home'/>
      </div>

{/* slider */}
<div className='bottom_home'>
 <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="https://rozetked.me/images/uploads/raZhs0vJCEhF.jpg" class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h3 className='skidca'>Успей купить по доступной цене</h3>
        {/* <p>Some representative placeholder content for the first slide.</p> */}
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="https://appleinsider.ru/wp-content/uploads/2022/04/iphone14_new_photos.jpg" class="d-block w-100 " alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h3 className='skidca'>Смартфоны от apple с 15% скидкой</h3>
        {/* <p>Some representative placeholder content for the second slide.</p> */}
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://earphones-review.ru/wp-content/uploads/2020/05/luchshie-polnorazmernye-naushniki.jpg" class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h3 className='skidca'>При покупке чехол в подарок</h3>
        {/* <p>Some representative placeholder content for the third slide.</p> */}
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
 </div>
 
</div> 
    </div>
  )
}

export default Home