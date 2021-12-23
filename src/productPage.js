import React, {useState} from 'react'
import  products  from './product'
import {  motion, AnimatePresence } from 'framer-motion'

import plusIcon from './images/icon-plus.svg'
import minusIcon from './images/icon-minus.svg'
import cartIcon from './images/icon-cart.svg'
import { useRef } from 'react'
import {useGlobalContext} from './context'

function ProductPage() {

    const [indexValue, setIndex] = useState(0);

    const activeThumb = useRef([])
    
    const {counter, setCounter, cartCounter, setCartCounter, modalSlider, setModal} = useGlobalContext()



    const handleChange = index =>{

        setIndex(index)
        

        const thumbImages = activeThumb.current.children
        console.log(thumbImages)
        
            for(var i= 0; i< thumbImages.length ; i++){
                if(i === index){

                    thumbImages[i].className = 'active-thumb'

                }
                else{
                    thumbImages[i].className = ''

                }
            }
        
       
        
    }
      


    


    
  
    return (
        <div className="product-section">
            <motion.div className="image-wrapper" initial={{opacity: 0} } transition={{delay: 2 }} animate={{opacity: 1.5}}>
                <div className="main-image">
                {
                    products.map((item) => {
                        const {ImageSrc} = item
                        return   <AnimatePresence><motion.img transition={{duration: 1}} initial={{scale: 0}}
                        animate={{scale: 1}} src={ImageSrc[indexValue]} alt="" onClick={() => setModal(true)} /></AnimatePresence>
                    })
                    
                }


                   

                </div>
                {
                    products.map((item) => {
                        return (
                            <div className="thumbnail" ref={activeThumb}  >
                                {
                                    item.ImageThumbSrc.map((img ,index) => {
                                        return <img src={img} alt="" onClick={() => handleChange(index)
                                         } 
                                       />
                                    })
                                }
                            </div>
                    )
                    })
                }
               
                
            </motion.div>
            <motion.div className="details" initial={{opacity: 0} } transition={{delay: 2 }} animate={{opacity: 1.5}}>
                <h3 style={{color: "hsl(26, 100%, 55%)"}}> Sneaker Company</h3>
                {products.map((item) =>{
                    return(  <div className="sneaker-deatils">
                    <h1 style={{textTransform: "capitalize" , margin: " 10px 0" , fontSize:"50px" }}>{item.title}</h1>
                    <p style={{ margin: " 10px 0" , color: "hsl(219, 9%, 45%)" }}>{item.desc}</p>
                    <h3  style={{ margin: " 10px 0" }}>${item.Previous * 0.50}.00 <span  style={{ marginLeft: "10px" , color: "hsl(26, 100%, 55%)" , 
                    fontSize: "14px",background: "hsl(25, 100%, 94%)" }}>50%</span></h3>
                    <del  style={{ margin: " 10px 0",  color: "hsl(219, 9%, 45%)" }}>${item.Previous}.00</del>
                </div>)
                      
                    
                })}

                <div className="sneaker-count">

                   <div className="sneaker-selection" >
                   <img src={minusIcon} alt="-" onClick={()=> setCounter((count)=> count > 0 ? count-1 : count)  }/> {counter}  <img src={plusIcon} alt="+" 
                   onClick={()=> setCounter((count)=> count+1 )  }/> </div><button onClick={() => setCartCounter(counter)} className='action-button'> <svg width="16" height="14" viewBox="0 0 22 20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#fff" fill-rule="nonzero"/></svg>  Add to cart</button>

                </div>

            </motion.div>
            <motion.div className="justforAnimation" initial={{y: 0  }} animate={{y: '-500vw' }} transition={{duration: 1}}>

            </motion.div>
        </div>
    )
}

export default ProductPage
