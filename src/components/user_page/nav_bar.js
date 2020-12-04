import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import UserSearchNav from './user_search_nav';
import IconButton from "@material-ui/core/IconButton";
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';


const useStyles = makeStyles(() => ({
    appBar: {
        padding: 5,
        boxShadow: 'none',

    },
    color: {
        backgroundImage: 'linear-gradient(to right, #bc4e9c, #f80759)',
    },
    svg: {
        height:45,
        width:45,
        color: '#fff'
    },
    search: {
        marginLeft: 'auto',
        minWidth:'30%',
    }
}));

function route_to_home() {
    window.location.href="/";
}

function UserNav() {
    const classes = useStyles();
    return(
        <div>
            <AppBar color={'primary'} position={'static'} className={classes.appBar} classes={{
                colorPrimary: classes.color
            }}>
                <Toolbar>
                    <IconButton onClick={()=>{route_to_home()}} className={classes.logo_button} disableFocusRipple disableRipple>
                        <HomeRoundedIcon className={classes.svg}/>
                    </IconButton>
                    <div className={classes.search}>
                        <UserSearchNav
                            placeholder={"Enter Summoner Name"}
                        />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default UserNav;
