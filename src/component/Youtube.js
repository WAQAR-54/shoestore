import React from 'react';
// import    logo from './logo.svg';
// import './App.css';
// import { Link } from "react-router-dom";

 function Youtube() 
 {

  const  API = 'AIzaSyCjYwg1bKEk7tJPbL8RE3DgH6G2eU1-RdU'
  const Channelid = 'UCk-aUD7iBOyjEKIReRddPtA'
  const result= 10;

  var finalurl= `https://www.googleapis.com/youtube/v3/search?key=${API}
   &channelID=${Channelid}$part=snippet,id$order=date&maxResult=${result}`
console.log(finalurl);

        return (

          <div className="App">
          <h1>You tube  </h1>

          <h4>This is good</h4>

        


        {/* async function fetchdata(){

          const response = await fetch('https://www.googleapis.com/youtube/v3/search?&part=snippet,id&key=&channelid=UCk-aUD7iBOyjEKIReRddPtA');
        console.log("response =" , response);
        const data = await response.json();
        console.log("Data = " , data);
      {'}'}
      fetchdata(); */}
      <p>
        Fetching Data From You Tube 
      </p>  

            
        </div>



        );
 }

export default Youtube;