import {createContext, useState} from 'react'

export const CCart=createContext()

const Context = ({children}) => {
    const [cart,setcart]=useState([]);
  return (
    <CCart.Provider value={{cart,setcart}}>{children}</CCart.Provider>
  )
}

export default Context