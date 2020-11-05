import React from 'react';
import { Outlet } from 'react-router-dom';
// import { routes } from 'react-router-dom';
// import {Switch } from 'react-router-dom';
// import {Outlet} from 'react-router-dom';
// import Home from './Home';
// import Productdetails from './Productdetails';
// import Notfound from './notfound';

 function Product() {

  return (

    
    <div  className="App">
     
      <h1>This is a Product Page </h1>
     
     <Outlet/>
      
   </div>

  );
 }

export default Product;