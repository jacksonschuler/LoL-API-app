import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import {makeStyles} from "@material-ui/core/styles";
import MostPlayedChamps from "./most_played_champs";
import Matches from "./Matches";
import Disclaimer from "../disclaimer";


const useStyles = makeStyles((theme) => ({
    top: {
        paddingTop: '10vh',
    },
    tabs: {
        justifyContent: 'start',
        '@media (max-width: 400px)' : {
            justifyContent: 'center'
        }
    },
    root: {
        display:'flex',
        backgroundColor:'#ededed',
        boxShadow: 'none',
        justifyContent: 'center',
        '@media (max-width: 400px)' : {
        }
    },
    tabLabel: {
        fontFamily: 'Quicksand',
        fontWeight:600,
        color: '#000000'
    },
}));


function UserTabs(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState('1');


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return(
        <div className={classes.top}>
            <TabContext value={value}>
                <AppBar position="static" className={classes.root}>
                    <TabList onChange={handleChange} classes={{flexContainer: classes.tabs}}>
                        <Tab label="Top Champs" value="1" className={classes.tabLabel}/>
                        <Tab label="Recent Games" value="2" className={classes.tabLabel}/>
                    </TabList>
                </AppBar>
                <TabPanel value="1">
                    <MostPlayedChamps
                        id={props.id}
                    />
                </TabPanel>
                <TabPanel value="2">
                    <Matches
                        summonerName={props.summonerName}
                        account_id={props.account_id}
                    />
                </TabPanel>
            </TabContext>
        </div>
    )
}

export default UserTabs;
