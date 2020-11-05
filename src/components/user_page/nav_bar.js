import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import UserSearchNav from './user_search_nav';
import IconButton from "@material-ui/core/IconButton";
import SvgIcon from "@material-ui/core/SvgIcon";


const useStyles = makeStyles(() => ({
    appBar: {
        padding: 5,
        boxShadow: '0 16px 40px -12.125px rgba(0,0,0,0.3)',
    },
    color: {
        backgroundImage: 'linear-gradient(to right, #bc4e9c, #f80759)',
    },
    svg: {
        height:48,
        width:48,
        overflow: 'visible',
        transform: 'scale(1.5)',
    },
    search: {
        margin: 'auto',
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
                    <IconButton onClick={()=>{route_to_home()}} className={classes.logo_button}>
                        <SvgIcon className={classes.svg} viewBox="0 0 32 32">
                            <path fill={'#fff'} d="M6.21 4L9 8.531v14.92L6.027 28h17.426l4.565-6H16V4H6.21zm3.58 2H14v18h9.982l-1.52 2H9.726L11 24.049V7.967l-.148-.24L9.789 6zm8.21.191v2.041c4.002.913 7 4.493 7 8.768a8.932 8.932 0 0 1-.518 3h2.098c.271-.954.42-1.96.42-3 0-5.382-3.888-9.865-9-10.809zM7 10.695a10.954 10.954 0 0 0-1.877 7.955A10.96 10.96 0 0 0 7 23.305v-12.61z" />
                        </SvgIcon>
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
