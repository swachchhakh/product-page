import React, { useContext, useState } from "react";


const AppContext = React.createContext();

const AppProvider = ({children}) => {

    const[counter, setCounter] = useState(0)
    const [ cartCounter, setCartCounter] = useState(0)
    const [modalSlider, setModal] = useState(false)
    const [mobileMenu, setMobileMenu] = useState(false)

    return (

        <AppContext.Provider value={{counter, setCounter, cartCounter, setCartCounter, modalSlider, setModal, mobileMenu, setMobileMenu}}>
            {children}
        </AppContext.Provider>
    )
     
    

}

export const useGlobalContext = () =>{
    return useContext(AppContext)
}

export {AppContext, AppProvider}