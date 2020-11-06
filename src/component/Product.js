import React from 'react';
import { Outlet } from 'react-router-dom';

 function Product() {

  return (

    
    <div  className="App">
     
      <h1>This is a Product Page </h1>
     
     <Outlet/>
      
   </div>

  );
 }

export default Product;