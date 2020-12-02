import React from 'react'
import {makeStyles} from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    btn: {
        position: 'absolute',
        top: 10,
        left: 10,
        color: 'white',
    }
}));


function BackButton() {
    const classes = useStyles();
    let history = useHistory();
    return(
        <div>
            <IconButton className={classes.btn} onClick={() => {
                history.goBack();
            }}>
                <ArrowBackIosIcon/>
            </IconButton>
        </div>
    )
}

export default BackButton
