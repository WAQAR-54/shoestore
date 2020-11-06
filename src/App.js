import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Header from './component/Header';
import Product from './component/Product';
// import Productdetails from './component/Pr/oductdetails';
import Notfound from './component/notfound';
import Footer from './component/Footer';
import Productdetails from './component/Productdetails';
import About from './component/About';
import ProductIndex from './component/ProductIndex';


// import Productdetails from './component/Productdetails';




 function App() {
  
      
  return (  

    <div >
       <BrowserRouter>
          <Header></Header>


          <Routes>
     <Route path="/" element={<Home/>}/> 
        <Route path="product" element={<Product/>}>
          <Route path="/" element={<ProductIndex />} />
          <Route path=":productID" element={<Productdetails />} />
        </Route>
        <Route path="/Productdetail" element={<Productdetails/>}/> 
        <Route path="/about" element={<About/>}/> 
        
        <Route path="/ProductIndex" element={<ProductIndex/>}/> 
        
        <Route path="*" element={<Notfound/>}/> 
        
        
    </Routes>





{/* 
          <Switch>
         
          <Route exact path="/product">
           <Product></Product>
           
              <Route exact path="/">
              
              <Product></Product>

             </Route>
              <Route exact path=":productID">
              
              <Productdetails></Productdetails>
              </Route>


</Route>
<Route exact path="/Productdetail">
           <Productdetails></Productdetails>
          </Route>

          <Route exact path="/about">
           <About></About>
          </Route>

          <Route exact path="*">
           <Notfound></Notfound>
          </Route>
          </Switch>  */}

          <Footer></Footer>

        </BrowserRouter>
          


       
      
   </div>

  );
 }

export default App;
