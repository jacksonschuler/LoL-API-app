import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles((theme) => ({
    card: {
        width: '60vw',
        height: '15vh',
        borderRadius: 7,
        boxShadow: '0 16px 40px -12.125px rgba(0,0,0,0.4)',
        margin: 7.5,
        padding: 5,
        display: 'flex',
        justifyContent: 'space-between',
    },
    card_container: {
        display:'flex',
        justifyContent: 'center',
        padding: 10,
    },
    indicator: {
        margin: 7.5,
        marginRight: 0,
        boxShadow: '0 16px 40px -12.125px rgba(0,0,0,0.4)',
        borderRadius: 7,
        height: '15vh',
        paddingTop: 5,
        paddingBottom:5,
        width: '2vw',
    }
}));

//http://ddragon.leagueoflegends.com/cdn/10.23.1/data/en_US/runesReforged.json

//input = 'schulerj'
//output = 10
function getParticipantID(summonerName, participants_arr) {
    return participants_arr.filter(participant => participant.player.summonerName === summonerName)[0].participantId;
}

function getParticipantTimeline(id, participants) {
    return participants.filter(player => player.participantId === id)[0]
}

function bgColor(win_bool) {
    if (win_bool) {
        return '#4eff4d';
    } else {
        return '#ff0300'
    }
}

/*
ID conversions required
- champ
- runes, primary and secondary
- summoner spells
- items
 */

function MatchCard(props) {
    const classes = useStyles();

    let static_match = require('./match');

    let main_id = getParticipantID(props.summonerName, static_match.participantIdentities); // get the participant idea of the queried summoner

    let main_obj = getParticipantTimeline(main_id, static_match.participants);

    return(
        <div className={classes.card_container}>
            <Card className={classes.indicator} style={{backgroundColor: bgColor(main_obj.stats.win)}}/>
            <Card className={classes.card}>
            </Card>
        </div>
    )
}

export default MatchCard;
