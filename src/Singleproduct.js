
import React, { useContext, useState } from 'react'
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./App.css";
import {CCart} from './Context'

const Singleproduct = ({prod}) => {

    const {cart,setcart} =useContext(CCart);

    console.log(cart)
  return (
    <div >
      <Card sx={{ maxWidth: 300 }}>
        <CardMedia
          component="img"
          height="50"
          image={prod.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {prod.prodname}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {prod.prodprice} Rs.
          </Typography>
        </CardContent>
        <CardActions>
            {cart.includes(prod)?( <Button size="small" onClick={()=>{
            setcart(cart.filter((c)=>c.id!==prod.id))
          }}>Remove from Card</Button>):(<Button size="small" onClick={()=>{
            setcart([...cart,prod])
          }}>Add to Card</Button>)}
          
         
        </CardActions>
       
      </Card>
    </div>
  );
};

export default Singleproduct;
