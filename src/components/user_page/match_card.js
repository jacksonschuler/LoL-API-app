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
        // justifyContent: 'space-between',

    },
    card_container: {
        display:'flex',
        justifyContent: 'center',
        padding: 10,
        alignItems: 'center'
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
    },
    rune_container: {
        width: 75,
        height: '100%',
        display: 'grid',
        justifyContent: 'center',
    },
    champ_icon_container: {
        width: 100,
        height: '100%',
        backgroundColor: 'blue',
    },
    summoners_container: {
        width: 50,
        height: '100%',
        backgroundColor: 'purple'
    },
    runes_primary: {
        height: 50,
        width: 50,
        backgroundImage: 'url(http://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Sorcery/SummonAery/SummonAery.png)',
        marginTop: 20,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    },
    runes_secondary: {
        height: 20,
        width:20,
        backgroundImage: 'url(http://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7200_Domination.png)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        margin: 'auto',
        marginTop: -20
    },
    champ_img: {
        width: 80,
        height: 80,
        borderRadius: 35,
        borderStyle: 'solid',
        borderColor: '#fff',
        borderWidth: '2px',
        backgroundImage: 'url()'
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

//going to use static object for this

//I can use this to get primary
//http://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Sorcery/SummonAery/SummonAery.png

//I can use this to get Secondary
//http://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7200_Domination.png
/*

ID conversions required
- champ
- runes, primary and secondary
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
                <div className={classes.rune_container}>
                    <div className={classes.runes_primary}/>
                    <div className={classes.runes_secondary}/>
                </div>
                <div className={classes.champ_icon_container}>
                </div>
                <div className={classes.summoners_container}>
                </div>
            </Card>
        </div>
    )
}

export default MatchCard;
