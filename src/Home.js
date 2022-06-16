import React, { useContext, useState } from 'react'
import Cart from './Cart'
import Singleproduct from './Singleproduct'
import {CCart} from './Context'

const Home = ({}) => {

   
    const  productarray=[{
        id:1,
        prodname:"Shirt",
        prodprice:100,
        image:"https://picsum.photos/200/300"
    },{
        id:2,
        prodname:"Tshirt",
        prodprice:99,
        image:"https://picsum.photos/200/300"
    },{
        id:3,
        prodname:"Paint",
        prodprice:98,
        image:"https://picsum.photos/200/300"
    },{
        id:4,
        prodname:"Formal Paint",
        prodprice:97,
        image:"https://picsum.photos/200/300"
    },{
        id:5,
        prodname:"Samsumg Phone",
        prodprice:96,
        image:"https://picsum.photos/200/300"
    },{
        id:6,
        prodname:"iphone",
        prodprice:94,
        image:"https://picsum.photos/200/300"
    },{
        id:7,
        prodname:"lamp",
        prodprice:93,
        image:"https://picsum.photos/200/300"
    },{
        id:8,
        prodname:"Bulb",
        prodprice:92,
        image:"https://picsum.photos/200/300"
    },{
        id:9,
        prodname:"Driing Machine",
        prodprice:91,
        image:"https://picsum.photos/200/300"
    },{
        id:10,
        prodname:"Door",
        prodprice:90,
        image:"https://picsum.photos/200/300"
    }]

    // console.log(productarray)
    // const [cart,setcart]=useState([]);
    const [products]=useState(productarray)
    
  return (
    <div className="Product_card">
        {
            products.map((prod)=>(
                <Singleproduct prod={prod}  key={prod.id} />
            ))
        }
        {/* <Singleproduct ></Singleproduct> */}
    </div>

  )
}

export default Home