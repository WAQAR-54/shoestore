import React from 'react'
// import { Typography, AppBar, Toolbar, makeStyles, Grid } from '@material-ui/core';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import { Link } from "react-router-dom";


// // const useStyles = makeStyles(theme => ({
// //     root: {
// //         flexGrow: 1,
// //     },
// //     nav: {
// //         color: "black",
// //         backgroundColor: "white",
// //     },
// //     logo: {
// //         fontWeight: "bold",
// //         fontFamily: "'Yellowtail', cursive",
// //         flexGrow: 1,
// //         color: "red"
// //     },
// //     navLink: {
// //         fontFamily: "'Ubuntu', sans-serif",
// //         // color: "black",
// //         fontSize: "1.1rem",
// //         fontWeight: "bold",
// //         color: "red",
// //         paddingRight: "3rem",
// //         cursor: "pointer",
// //         "&:hover": {
// //             fontWeight: "bolder",
// //             color: "Blue",
// //             // textDecoration: "underline"
// //         }
// //     },
// //     navIcon: {
// //         cursor: "pointer",
// //         color: "red",
// //         "&:hover": {
// //             transform: "rotate(-10deg)",
// //         }
// //     }
// }))


function yt() {
   
    const  API = 'AIzaSyCjYwg1bKEk7tJPbL8RE3DgH6G2eU1-RdU'
    const Channelid = 'UCk-aUD7iBOyjEKIReRddPtA'
    const result= 10;

    var finalurl= `https://www.googleapis.com/youtube/v3/search?key=${API}
     &channelID=${Channelid}$part=snippetid$order=date&maxResult=${result}`
console.log(finalurl);
    return (
        
        <div>
            
            <h1>youtube</h1>
            <p>Fetching Data </p>

           <p></p>

        </div>

    )
}

export default yt