import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles((theme) => ({
    card: {
        width: '60vw',
        height: '15vh',
        borderRadius: 7,
        boxShadow: '0 16px 40px -12.125px rgba(0,0,0,0.4)',
        // justifyContent: 'space-between',
    },
    card_content: {
        position: 'relative',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        zIndex: 5,
    },
    card_container: {
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    rune_container: {
        marginLeft: 10,
        width: 60,
        height: '100%',
        display: 'grid',
        justifyContent: 'center',
    },
    champ_icon_container: {
        width: 95,
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    summoners_container: {
        width: 30,
        height: '60%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    runes_primary: {
        marginTop:15,
        height: 50,
        width: 50,
        backgroundImage: 'url(http://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Sorcery/SummonAery/SummonAery.png)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    },
    runes_secondary: {
        height: 20,
        width:20,
        marginTop: -15,
        backgroundImage: 'url(http://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7200_Domination.png)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        margin: 'auto',
    },
    champ_img: {
        width: 80,
        height: 80,
        borderRadius: 7,
        backgroundImage: 'url(http://ddragon.leagueoflegends.com/cdn/10.23.1/img/champion/Aatrox.png)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        boxShadow: '0 16px 40px -12.125px rgba(0,0,0,0.3)',
    },
    summoner_spell: {
        height:30,
        width: 30,
        backgroundColor: 'red',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        borderRadius: 5,
    },
    svg: {
        position: 'relative',
        width: 350,
        height: 350,
        marginTop: -200,
        marginLeft: -90,
        zIndex: 0,
    },
    kda_container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft:60,
        width: 100,
        height: '100%',
        flexWrap: 'wrap',
    },
    kda_text: {
        fontFamily: 'Quicksand',
        fontWeight: 300,
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
        return '#ff6c7d'
    }
}

function computeKDA(kills, deaths, assists) {
    return ((kills + assists) / deaths).toFixed(2)
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
            <Card className={classes.card}>
                <div className={classes.card_content}>
                    <div className={classes.rune_container}>
                        <div className={classes.runes_primary}/>
                        <div className={classes.runes_secondary}/>
                    </div>
                    <div className={classes.champ_icon_container}>
                        <div className={classes.champ_img}/>
                    </div>
                    <div className={classes.summoners_container}>
                        <div className={classes.summoner_spell} style={{backgroundImage: 'url(http://ddragon.leagueoflegends.com/cdn/10.23.1/img/spell/SummonerFlash.png)'}}/>
                        <div className={classes.summoner_spell} style={{backgroundImage: 'url(http://ddragon.leagueoflegends.com/cdn/10.23.1/img/spell/SummonerTeleport.png)'}}/>
                    </div>
                    <div className={classes.kda_container}>
                        <h3 className={classes.kda_text} style={{marginBottom: -30}}>{main_obj.stats.kills} / {main_obj.stats.deaths} / {main_obj.stats.assists}</h3>
                        <h4 className={classes.kda_text} style={{fontWeight: 400,}}>{computeKDA(main_obj.stats.kills, main_obj.stats.deaths, main_obj.stats.assists)} KDA</h4>
                    </div>
                </div>
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className={classes.svg}>
                    <path fill={bgColor(false)} d="M41.8,-74.6C53.3,-65.7,61.3,-52.8,70.4,-39.8C79.4,-26.7,89.6,-13.3,91.6,1.1C93.6,15.6,87.4,31.3,77.2,42.5C67.1,53.7,53,60.5,39.4,65.8C25.9,71.1,13,74.9,-1.5,77.4C-15.9,80,-31.8,81.3,-41.3,73.7C-50.8,66.1,-53.8,49.5,-59.8,35.7C-65.7,21.9,-74.5,11,-78.5,-2.3C-82.4,-15.5,-81.4,-31,-75.6,-44.9C-69.8,-58.9,-59.1,-71.3,-45.7,-79.2C-32.2,-87,-16.1,-90.3,-0.5,-89.4C15.1,-88.5,30.2,-83.5,41.8,-74.6Z" transform="translate(100 100)" />
                </svg>
            </Card>
        </div>
    )
}

export default MatchCard;
