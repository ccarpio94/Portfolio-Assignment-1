import React from 'react'
import { Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CustomButton from './CustomButton'

const styles = makeStyles({
    wrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 5rem 0 5rem"
    }, 
    item: {
        paddingTop: "1rem"
    }
})

function Grid(props) {
    const {icon, title, buttonTitle} = props;
    const classes = styles();
    return (
        <div className={classes.wrapper}>
            <div className={classes.item}>{icon}</div>
            <Typography className={classes.item} variants="h5">{title}</Typography>
            <div className={classes.item}>
                <CustomButton txt={buttonTitle}></CustomButton>
            </div>
        </div>
    )
}


export default Grid