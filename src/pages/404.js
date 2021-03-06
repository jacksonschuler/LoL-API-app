import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import UserNav from "../components/user_page/nav_bar";
/**
 * Info i wanna show
 * Icon
 * Rank (solo/duo) -- because thats all that matters
 * Level
 * Top Champs
 * */

const useStyles = makeStyles((theme) => ({
    cards: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 100,
    },
    color_divider: {
        backgroundImage: 'linear-gradient(to right, #bc4e9c, #f80759)',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: 400,
        zIndex: -1,
    },
    footer: {
        height: '20vh',
    },
    txt_container: {
        height:'100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    txt: {
        color: 'white',
        fontFamily: 'Quicksand',
        fontSize: 64
    }
}));


function NotFound() {
    const classes = useStyles();
    return(
        <div>
            <UserNav/>
            <div className={classes.color_divider}>
                <div className={classes.txt_container}>
                    <h1 className={classes.txt}>404 - NOT FOUND</h1>
                </div>
            </div>
            <div className={classes.footer}/>
        </div>
    )
}
export default NotFound;
