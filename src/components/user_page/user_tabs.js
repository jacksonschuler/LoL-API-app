import React, {useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import {makeStyles} from "@material-ui/core/styles";
import MostPlayedChamps from "./most_played_champs";
import axios from "axios";
import MatchCard from "./match_card";


const useStyles = makeStyles((theme) => ({
    top: {
        paddingTop: '10vh',
    },
    root: {
        display:'flex',
        paddingLeft: '13vw',
        backgroundColor:'#ededed',
        boxShadow: 'none',
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
                    <TabList onChange={handleChange} aria-label="simple tabs example">
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
                    {/*<div>*/}
                    {/*    <MatchCard*/}
                    {/*        test={"LOL"}*/}
                    {/*        summonerName={props.summonerName}*/}
                    {/*    />*/}

                    {/*</div>*/}
                </TabPanel>
            </TabContext>
        </div>
    )
}

export default UserTabs;
