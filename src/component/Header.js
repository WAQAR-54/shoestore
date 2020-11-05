import React from 'react'
import { Typography, AppBar, Toolbar, makeStyles, Grid } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from "react-router-dom";


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    nav: {
        color: "black",
        backgroundColor: "white",
    },
    logo: {
        fontWeight: "bold",
        fontFamily: "'Yellowtail', cursive",
        flexGrow: 1,
        color: "red"
    },
    navLink: {
        fontFamily: "'Ubuntu', sans-serif",
        // color: "black",
        fontSize: "1.1rem",
        fontWeight: "bold",
        color: "red",
        paddingRight: "3rem",
        cursor: "pointer",
        "&:hover": {
            fontWeight: "bolder",
            color: "Blue",
            // textDecoration: "underline"
        }
    },
    navIcon: {
        cursor: "pointer",
        color: "red",
        "&:hover": {
            transform: "rotate(-10deg)",
        }
    }
}))


function Header() {
    const classes = useStyles()
    return (
        <Grid container className={classes.root}>
            <AppBar className={classes.nav} position="sticky">
                <Toolbar>
                    <Link className={classes.logo} to="/">                    
                        <Typography className={classes.logo} variant="h5">
                            SHOES STORE
                        </Typography>
                    </Link>
                    <Typography>
                        <Link to="/" className={classes.navLink} >Home</Link>{"            "}
                        <Link to="/product" className={classes.navLink} >Products</Link>{"            "}
                        <Link to="/productdetail" className={classes.navLink} >Products Detail</Link>{"            "}
                       
                        <Link to="/about" className={classes.navLink} >About</Link>
                    </Typography>
                    
                    <ShoppingCartIcon className={classes.navIcon} />
                </Toolbar>
            </AppBar>
        </Grid>
    )
}

export default Header