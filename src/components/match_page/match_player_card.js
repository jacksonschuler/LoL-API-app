import React, {useEffect, useState} from 'react';
import config from "../../config";
import axios from "axios";
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({

    card: {
        padding:15,
        borderRadius: 7,
        minWidth: 330,
        maxWidth: 330,
        minHeight: 500,
        boxShadow: '0 16px 40px -12.125px rgba(0,0,0,0.4)',
        margin: 7.5,
    },
    title_txt: {
        marginLeft: 5,
        marginTop: -2,
        marginBottom: 50,
        fontFamily: 'Quicksand'
    },
    txt: {
        marginLeft: 20,
        fontFamily: 'Quicksand'
    },
    container: {
      display: 'grid',
        justifyContent: 'center',
        gridTemplateColumns: '80px 200px',
        columnGap: '40px',
    },

    champ_icon_container: {
        width: 120,
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    champ_img: {
        width: 110,
        height: 110,
        borderRadius: 7,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        boxShadow: '0 16px 40px -12.125px rgba(0,0,0,0.3)',
    },
    items_container: {
        padding: 5,
        display: 'grid',
        gridTemplateColumns: '50px 50px 50px',
        gridTemplateRows: '50px 50px',
        columnGap: '8px',
        rowGap: '8px',
    },
    item: {
        backgroundColor: '#a9a9a9',
        borderRadius: 5,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    },

}));

function getPlayerId(summonerName, participants_arr) {
    return participants_arr.filter(participant => participant.player.summonerName === summonerName)[0].participantId;
}

function getPlayerTimeline(id, participants) {
    return participants[id - 1]
}

function getOpposingTimeline(role,lane, participants, teamId) {
    if (lane !== 'BOTTOM') {
        return participants.filter(player => (player.timeline.lane === lane && player.teamId === teamId))[0]
    } else {
        return participants.filter(player => (player.timeline.role === role && player.timeline.lane === lane && player.teamId === teamId))[0]
    }
}

function getOpponentName(id, participants) {
    return participants[id -1].player.summonerName;
}

function getChampNameFromChampID(id, champions){
    if (champions !== {}) {
        if (champions.data) {
            let champs = Object.values(champions.data);
            for (let i = 0; i < champs.length; i++){
                if (champs[i].key === id.toString()) {
                    return champs[i].id
                }
            }
        }
    }
}

function computeKDA(kills, deaths, assists) {
    if (deaths === 0) {
        return ((kills + assists) / 1).toFixed(2)
    }
    return ((kills + assists) / deaths).toFixed(2)
}

function bgColor(win_bool) {
    if (win_bool) {
        return '#4eff4d';
    } else {
        return '#ff6c7d'
    }
}

function MatchPlayerCard(props) {

    useEffect(() => {
        let game_version = config.GAME_VERSION;
        axios.get('https://us-central1-lol-api-project.cloudfunctions.net/getChampsJSON?version=' + game_version).then(res => {
            setChamps(res.data);
        });
    });

    let [champs, setChamps] = useState(undefined);

    let runes = require('../../runesReforged');

    const classes = useStyles();

    let playerId = getPlayerId(props.summonerName, props.match['participantIdentities']);

    let playerTimeline = getPlayerTimeline(playerId, props.match['participants']);

    let oppTeamId = playerTimeline.teamId === 100 ? 200 : 100;

    let opponentTimeline = getOpposingTimeline(playerTimeline.timeline.role, playerTimeline.timeline.lane, props.match['participants'], oppTeamId);

    let opponentName = getOpponentName(opponentTimeline.participantId, props.match['participantIdentities']);

    let opponentId = opponentTimeline.participantId;

    return(
        <div>
            <Card className={classes.card}>
                {props.isPlayer ? (
                    <div>
                        <h2 className={classes.title_txt}>{props.summonerName}</h2>
                        <div className={classes.container}>
                            <div className={classes.champ_icon_container}>
                                {champs ? (
                                    <div className={classes.champ_img} style={{backgroundImage: `url(${'http://ddragon.leagueoflegends.com/cdn/10.23.1/img/champion/' + getChampNameFromChampID(playerTimeline.championId, champs) + '.png'})`}}/>
                                ) : (
                                    <div></div>
                                )}
                            </div>
                            <div>
                                <h3 className={classes.txt}>{playerTimeline.stats.kills} / {playerTimeline.stats.deaths} / {playerTimeline.stats.assists} ({computeKDA(playerTimeline.stats.kills, playerTimeline.stats.deaths, playerTimeline.stats.assists)} KDA)</h3>
                                <h3 className={classes.txt}> Level 13</h3>
                                <h3 style={{color: bgColor(playerTimeline.stats.win), marginLeft: 20,}}>{playerTimeline.stats.win === true ? '[VICTORY]': '[DEFEAT]'}</h3>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>
                        <h2 className={classes.title_txt}>{opponentName}</h2>
                        <div className={classes.container}>
                            <div className={classes.champ_icon_container}>
                                {champs ? (
                                    <div className={classes.champ_img} style={{backgroundImage: `url(${'http://ddragon.leagueoflegends.com/cdn/10.23.1/img/champion/' + getChampNameFromChampID(opponentTimeline.championId, champs) + '.png'})`}}/>
                                ) : (
                                    <div></div>
                                )}
                            </div>
                            <div>
                                <h3 className={classes.txt}>{opponentTimeline.stats.kills} / {opponentTimeline.stats.deaths} / {opponentTimeline.stats.assists} ({computeKDA(opponentTimeline.stats.kills, opponentTimeline.stats.deaths, opponentTimeline.stats.assists)} KDA)</h3>
                                <h3 className={classes.txt}> Level {opponentTimeline.stats.champLevel}</h3>
                                <h3 style={{color: bgColor(opponentTimeline.stats.win), marginLeft: 20,}}>{opponentTimeline.stats.win === true ? '[VICTORY]': '[DEFEAT]'}</h3>
                            </div>
                        </div>
                    </div>
                )}

            </Card>
        </div>
    )
}

export default MatchPlayerCard
