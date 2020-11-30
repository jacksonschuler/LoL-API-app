import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import MatchRadarChart from "./match_radar_chart";

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
        fontFamily: 'Quicksand'
    },
}));

function getPlayerId(summonerName, participants_arr) {
    return participants_arr.filter(participant => participant.player.summonerName === summonerName)[0].participantId;
}

function getPlayerTimeline(id, participants) {
    return participants[id - 1]
}

function getOpposingTimeline(role,lane, participants) {
    return participants.filter(player => (player.timeline.role === role && player.timeline.lane === lane))[0]
}

function getOpponentName(id, participants) {
    return participants[id -1].player.summonerName;
}

function computeKDA(kills, deaths, assists) {
    if (deaths === 0) {
        return ((kills + assists) / 1).toFixed(2)
    }
    return ((kills + assists) / deaths).toFixed(2)
}

function getKP(myKills, myAssists, totalKills){
    return (((myKills + myAssists)/totalKills) * 100).toFixed(1)
}

function getTotalKills(match, teamId) {
    let num_kills = 0;
    let filtered_match = match.participants.filter(player => player.teamId === teamId);
    filtered_match.forEach(player => {
        num_kills += player.stats.kills
    });
    return num_kills
}

function getDamagePercent(myDamage, teamDamage){
    return (myDamage/teamDamage).toFixed(1)
}

function computeTeamDamage(match,teamId){
    let damage_dealt = 0;
    let filtered_match = match.participants.filter(player => player.teamId === teamId);
    filtered_match.forEach(player => {
        damage_dealt += player.stats.totalDamageDealtToChampions
    });
    return damage_dealt
}

/**
 * feature scale an array between 2-3
 * @param arr array to scale
 * @return {[]} the array scaled between 2-3
 */
function normalize(arr) {
    let normalized = [];
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    for (let i = 0; i < arr.length; i++) {
        normalized[i] = 2 + ((arr[i] - min)*(3-2))/(max-min)
    }
    return normalized
}

function DamageCard(props) {
    let playerId = getPlayerId(props.summonerName, props.match['participantIdentities']);

    let playerTimeline = getPlayerTimeline(playerId, props.match['participants']);

    let opponentTimeline = getOpposingTimeline(playerTimeline.timeline.role, playerTimeline.timeline.lane, props.match['participants']);

    let opponentName = getOpponentName(opponentTimeline.participantId, props.match['participantIdentities']);

    let opponentId = opponentTimeline.participantId;

    let KDA_arr = props.match['participants'].map(participant => parseFloat(computeKDA(participant.stats.kills, participant.stats.deaths, participant.stats.assists)));
    let KP_arr = props.match['participants'].map(participant => parseFloat(getKP(participant.stats.kills, participant.stats.assists, getTotalKills(props.match, participant.teamId))));
    let championDMG_arr = props.match['participants'].map(participant => participant.stats.totalDamageDealtToChampions);
    let dmgShare_arr = props.match['participants'].map(participant => parseFloat(getDamagePercent(participant.stats.totalDamageDealtToChampions, computeTeamDamage(props.match, participant.teamId))));
    let dmgTaken_arr = props.match['participants'].map(participant => participant.stats.totalDamageDealtToChampions);
    let dmgGold = props.match['participants'].map(participant => parseFloat((participant.stats.totalDamageDealtToChampions/participant.stats.goldEarned).toFixed(5)));

    let player_dmg_data = [
        normalize(KP_arr)[playerId -1],
        normalize(KDA_arr)[playerId -1],
        normalize(championDMG_arr)[playerId -1],
        normalize(dmgShare_arr)[playerId -1],
        normalize(dmgTaken_arr)[playerId -1],
        normalize(dmgGold)[playerId -1]
    ];

    let opponent_dmg_data = [
        normalize(KP_arr)[opponentId -1],
        normalize(KDA_arr)[opponentId -1],
        normalize(championDMG_arr)[opponentId -1],
        normalize(dmgShare_arr)[opponentId -1],
        normalize(dmgTaken_arr)[opponentId -1],
        normalize(dmgGold)[opponentId -1]
    ];

    const classes = useStyles();
    return(
        <div>
            <Card className={classes.card}>
                <h2 className={classes.title_txt}>Damage</h2>
                <MatchRadarChart
                    labels={['KP (%)', 'KDA', 'Dmg Done', 'Dmg Share (%)', 'Dmg Taken', 'Dmg/gold']}
                    player_data={player_dmg_data}
                    player_label={props.summonerName}
                    opponent_label={opponentName}
                    opponent_data={opponent_dmg_data}
                />
            </Card>
        </div>
    )
}

export default DamageCard;
