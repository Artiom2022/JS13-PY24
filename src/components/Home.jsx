import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>

<header>
		
		<div className="navigation">
			<div className="logo">TechnoMania</div>
			<div className="menu">
				<ul className="nav">
					<li><Link className='link' to="/home">Home</Link></li>
					<li><Link className='link' to="/products">Products</Link></li>
					<li><Link className='link' to="">About</Link></li>
					<li><Link className='link' to="">Admin Page</Link></li>
					<li><Link className='link' to="/">Register</Link></li>
				</ul>
			</div>
		</div>

		<div className="description">
			<h1>Welcome to TechnoMania</h1>
			<p>Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты. Силуэт ведущими грустный злых большой, ручеек диких бросил большого щеке переулка имеет однажды на берегу возвращайся! Вскоре они города заманивший, эта свое рекламных, океана переулка снова.</p>
			
			<Link to="/products" className="shop">Купить сейчас</Link>
		</div>

		<div className="end-head">
			<div className="post-navigation">
				<ul className="social">
					<li><a className="link" href="#"><i className="fab fa-facebook-square"></i></a></li>
					<li><a className="link" href="#"><i className="fab fa-twitter-square"></i></a></li>
					<li><a className="link" href="#"><i className="fab fa-linkedin"></i></a></li>
					<li><a className="link" href="#"><i className="fab fa-tumblr-square"></i></a></li>
				</ul>
			</div>
		</div>

	</header>

    </div>
    
  

  )      
}

export default Home