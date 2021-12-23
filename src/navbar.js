import React, {useState} from 'react'

import logo from './images/logo.svg'
import avatar from './images/image-avatar.png'
import deleteIcon from './images/icon-delete.svg'

import cartIcon from './images/icon-cart.svg'
import {useGlobalContext} from './context'
import  products  from './product'

import {  motion } from 'framer-motion'





function Navbar() {

    const {cartCounter, setCartCounter, mobileMenu, setMobileMenu} = useGlobalContext()

    const [showCart, setShowCart] = useState(false)

    const animation ={
        opened : {
            y: 0,
        },
        closed :{
            y: '-100vh',
        }
    }

    
    return (

        <nav>
        <motion.div className='navbar' initial={{y : 10 , opacity:0 }} transition={{delay: 1.5}} animate ={{y : 0 , opacity: 1}}
        transition={{delay: 1}}>
            <div className="logo">
            <img src={logo} alt="logo"/>
            </div>
            <div className="menu">
                <ul>
                    <li>Collections</li>
                    
                    <li>Men</li>
                    
                    <li>Women</li>
                    
                    <li>About</li>
                    
                    <li>Contact</li>
                </ul>
            </div>
            <div className="cartSection">

                <div className="cart" >
                    <img src={cartIcon} alt="cart" onClick={() => setShowCart(!showCart)  }/><p className='cartCount'>{cartCounter}</p>
                </div>
                <div className="avatar">
                    <img src={avatar} alt=""/>
                </div>
                    <div className="mobile-menu">

                        <a onClick={() => setMobileMenu(true)}>Menu</a>
                    </div>
              
                <div className={`${showCart  ? 'cart-wrapper' : 'cart-no-wrapper'}`}>
            <h2>Cart</h2>
            <span></span>
        {   cartCounter > 0 ?
            products.map((item)=>{
                return (<div className="cart-content-container">
                  <div>
                  <img src={item.ImageThumbSrc[0]} alt="" className='cart-img'/> 
                  <div className="cart-details">
                  <p>{item.title}</p>
                   <p>${item.price}.00 × {cartCounter}=${item.price * cartCounter}</p>
                  </div>
                  <img src={deleteIcon} alt="" onClick={() => setCartCounter((count) => count =0)}/>
                  </div>
                  <button className='action-button'>Checkout</button>

                </div>)
            }) : <p className='emptytext'> Cart is empty </p>
        }
        </div>
               
            </div>
        </motion.div>
            

<motion.div 

variants={animation} 
initial={{y:"-100vh"}}
animate={mobileMenu ? "opened" : "closed" }
transition={{duration:0.7}} 
 className="mobileMenuList">
<ul>
        <li>Collections</li>
        
        <li>Men</li>
        
        <li>Women</li>
        
        <li>About</li>
        
        <li>Contact</li>
        <a  onClick={() => setMobileMenu((state) => !state) }>Close</a>


    </ul>
    
</motion.div>
           
           
      
        </nav>
    )
}

export default Navbar
