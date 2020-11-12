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
    const [matchesState, setMatchesState] = React.useState(undefined);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        // get the 10 most recent matches
        let matches = [];
        const api_call = 'https://us-central1-lol-api-project.cloudfunctions.net/getMatches?acc_id=' + props.account_id;
        axios.get(api_call).then((res) => {
            res.data.forEach(match => {
                axios.get('https://us-central1-lol-api-project.cloudfunctions.net/getMatch?match_id=' + match).then(response => {
                    matches.push(response.data);
                    if (matches.length === 10) {
                        setMatchesState(matches);
                    }
                })
            });
        });
    }, []);

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
                    {matchesState ? (
                        matchesState.map(match =>
                            <MatchCard
                                key={match.gameId}
                                test={match.gameId}
                                match={match}
                            />
                        )
                        ) : (<div>nah chief</div>)}
                </TabPanel>
            </TabContext>
        </div>
    )
}

export default UserTabs;
