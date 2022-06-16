import React, { useState,useEffect,useContext } from 'react'
import Singleproduct from './Singleproduct'
import {CCart} from './Context'

const Cart = ({prod}) => {
    // console.log("Cart_page",cart)
    const [total,settotal]=useState([]); 
    const {cart} =useContext(CCart);

    useEffect(() => {
      settotal(cart.reduce((acc,curr)=>acc+Number(curr.prodprice),0))
    }, [cart])
    
  return (
    <div>
        <span style={{fontSize:30}}>My cart</span>
        <br/><br/>
        <span>Total: {total} Rs</span>
        <div className="Product_card">
            {
                cart.map((prod)=>(
                    <Singleproduct  prod={prod} />
                ))
            }
        </div>
    </div>
  )
}

export default Cart