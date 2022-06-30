import React from 'react'
import CustomButton from './CustomButton'
import {Toolbar, Typography} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles";

const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        backgroundColor: "#fff",
        '@media (max-width:780px)': {
            flexDirection: "column"
        }
    },
    logo:{
        width: "15%",
        '@media (max-width:780px)': {
            display: "none"
        }
    },
    logoMobile:{
        width: "100%",
        display: "none",
        '@media (max-width:780px)': {
            display: "incline-block"
        }
    },
    menuItem:{
        cursor: "pointer",
        flexGrow: 1,
        "&:hover": {
            color: "#4f25c8"
        },
        '@media (max-width:780px)': {
            paddingBottom: "1rem"
        }
    }
})

function NavBar () {
    const classes = styles()
    return (
        <Toolbar position="sticky" colors="rgba(0, 0, 0.87)" className={classes.bar}>
            <Typography variants="h6" className={classes.menuItem}>
                About Me
            </Typography>
            <Typography variants="h6" className={classes.menuItem}>
                Work Experience
            </Typography>
            <Typography variants="h6" className={classes.menuItem}>
                MIT xPro Projects
            </Typography>
            <Typography variants="h6" className={classes.menuItem}>
                Contact Me
            </Typography>
            <CustomButton txt="Try Our Product for Free"></CustomButton>
        </Toolbar>
    )
}


export default NavBar
