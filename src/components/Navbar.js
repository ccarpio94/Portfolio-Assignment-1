import React from 'react'
import CustomButton from './CustomButton'
import {Toolbar, Typography} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles";

const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        backgroundColor: "#2f3036",
        '@media (max-width:780px)': {
            flexDirection: "column"
        }
    },
    menuItem:{
        cursor: "pointer",
        color: "#fff",
        flexGrow: 1,
        "&:hover": {
            color: "#108589"
        },
        '@media (max-width:780px)': {
            paddingBottom: "1rem"
        }
    }
})

function NavBar () {
    const classes = styles()
    return (
        <Toolbar position="sticky" colors="rgba(0, 0, 0.87)"className={classes.bar}>
            <Typography variants="h6" className={classes.menuItem}>
                About Me
            </Typography>
            <Typography variants="h6" className={classes.menuItem}>
                Work Experience
            </Typography>
            <Typography variants="h6" className={classes.menuItem}>
                My Projects
            </Typography>
            <Typography variants="h6" className={classes.menuItem}>
                Contact Me
            </Typography>
            <CustomButton txt="Visit my GitHub Page"></CustomButton>
        </Toolbar>
    )
}


export default NavBar
