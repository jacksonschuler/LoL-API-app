import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    title: {
        flexGrow: 1,
    },
    appBar: {
        boxShadow: '0 16px 40px -12.125px rgba(0,0,0,0.3)',
    }
}));

function LandingNavBar() {
    const classes = useStyles();
    return(
        <div>
            <AppBar position={'static'} className={classes.appBar}>
                <Toolbar>
                    <Typography className={classes.title} variant={'h6'} noWrap>League Application</Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default LandingNavBar;
