import React from 'react'
import CustomButton from './CustomButton'
import logo from '../logo.svg'
import logoMobile from '../logoMobile.svg'
import {Toolbar, Typography} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles";

const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        backgroundColor: "#fff",
        ['@media (max-width:780px)']: {
            flexDirection: "column"
        }
    },
    logo:{
        width: "15%",
        ['@media (max-width:780px)']: {
            display: "none"
        }
    },
    logoMobile:{
        width: "100%",
        display: "none",
        ['@media (max-width:780px)']: {
            display: "incline-block"
        }
    },
    menuItem:{
        cursor: "pointer",
        flexGrow: 1,
        "&:hover": {
            color: "#4f25c8"
        },
        ['@media (max-width:780px)']: {
            paddingBottom: "1rem"
        }
    }
})

function NavBar () {
    const classes = styles()
    return (
        <Toolbar position="sticky" colors="rgba(0, 0, 0.87)" className={classes.bar}>
            <img src={logo} className={classes.logo}></img>
            <img src={logoMobile} className={classes.logoMobile}></img>
            <Typography variants="h6" className={classes.menuItem}>
                About
            </Typography>
            <Typography variants="h6" className={classes.menuItem}>
                Blog
            </Typography>
            <Typography variants="h6" className={classes.menuItem}>
                Careers
            </Typography>
            <Typography variants="h6" className={classes.menuItem}>
                Demos
            </Typography>
            <Typography variants="h6" className={classes.menuItem}>
                Contact Us
            </Typography>
            <CustomButton txt="Try Our Product for Free"></CustomButton>
        </Toolbar>
    )
}


export default NavBar
