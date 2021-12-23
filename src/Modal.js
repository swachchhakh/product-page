import { ListItem } from '@material-ui/core'
import React, {useState} from 'react'
import products from './product'
import {  motion, AnimatePresence } from 'framer-motion'

import nextIcon from './images/icon-next.svg'
import prevIcon from './images/icon-previous.svg'
import closeIcon from './images/icon-close.svg'
import {useGlobalContext} from './context'

function Modal() {
    const [modalCount, setModalCount] = useState(0)
    const {modalSlider, setModal} = useGlobalContext()
    return (
        <div>
        
            {
                products.map((item) => {
                    return (
                        <div className={`${modalSlider ? 'modalWrapperShow' : 'modalWrapperHidden'}`}
                        >
                            
                            <div className='moda-image-wrapper'>
                                <div className="prevBtn">
                                <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="hsl(26, 100%, 55%)" stroke-width="3" fill="none" fill-rule="evenodd"
                                 onClick={() => setModalCount((count) => count > 0 ? count- 1 : count =3 )}
                                /></svg>
                                </div>
                                
                            
                                <img src={closeIcon}  alt="close" className='closeBtn' onClick={() => setModal(false)}/>
                                <AnimatePresence>
                              { modalSlider && ( 
                              <motion.img transition={{duration: 1}} initial={{scale: 0}}
                        animate={{scale: 1}}
                          src={item.ImageSrc[modalCount]} alt=""  className='modal-image'/>)}</AnimatePresence> 
                          <div className="nextBtn">
                          <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m3 1 9 8-8 8" stroke="hsl(26, 100%, 55%)" stroke-width="3" fill="none" fill-rule="evenodd" className='nextBtn' onClick={() => setModalCount((count) => count < 3 ? count+ 1 : count = 0)}/></svg>
                              </div> 
                         
                           
                            </div>
                           
                           
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Modal
