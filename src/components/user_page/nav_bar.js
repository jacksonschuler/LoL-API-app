import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import LandingSearchBar from "../landing/landing_search";

const useStyles = makeStyles(() => ({
    title: {
        flexGrow: 1,
        fontFamily: 'Quicksand',
    },
    appBar: {
        padding: 5,
        boxShadow: '0 16px 40px -12.125px rgba(0,0,0,0.3)',
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    color: {
        backgroundImage: 'linear-gradient(to right, #bc4e9c, #f80759)',
    },
}));

function UserNav() {
    const classes = useStyles();
    return(
        <div>
            <AppBar color={'primary'} position={'static'} className={classes.appBar} classes={{
                colorPrimary: classes.color
            }}>
                <Toolbar>
                    <LandingSearchBar
                        placeholder={"Enter Summoner Name"}
                    />
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default UserNav;
