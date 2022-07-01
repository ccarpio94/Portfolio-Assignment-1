import React from 'react'
import { Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles' //hook that allows us to write CSS inside this JavaScript component

const StyledButton = withStyles({
    root: {
        href: "https://github.com/ccarpio94",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "44px",
        padding: "0 25px",
        boxSizing: "border-box",
        borderRadius: 0,
        background: "#869DAB",
        color: "#000000",
        transform: "none",
        transition: "background .3s,border-color .3s,color .3s",
        "&:hover": {
            backgroundColor: "#22575E"
        },
    },
    label: {
        textTransform: 'capitalize',
    },
})(Button);

function CustomButton(props){
    return (
        <StyledButton variant="contained">{props.txt}</StyledButton>
    )
}

export default CustomButton
