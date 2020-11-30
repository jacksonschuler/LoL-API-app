import React from 'react'
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

function getCSPerMin(totalCS, matchLength) {
    return (totalCS/matchLength * 60).toFixed(1)
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

function IncomeCard(props) {

    let playerId = getPlayerId(props.summonerName, props.match['participantIdentities']);

    let playerTimeline = getPlayerTimeline(playerId, props.match['participants']);

    let opponentTimeline = getOpposingTimeline(playerTimeline.timeline.role, playerTimeline.timeline.lane, props.match['participants']);

    let opponentName = getOpponentName(opponentTimeline.participantId, props.match['participantIdentities']);

    let opponentId = opponentTimeline.participantId;

    let cs_arr = props.match['participants'].map(participant => parseFloat(getCSPerMin(participant.stats.totalMinionsKilled+ participant.stats.neutralMinionsKilled, props.match.gameDuration)));
    let goldEarned_arr = props.match['participants'].map(participant => participant.stats.goldEarned);
    let goldSpent_arr = props.match['participants'].map(participant => participant.stats.goldSpent);

    let player_econ_data = [
        normalize(cs_arr)[playerId -1],
        normalize(goldEarned_arr)[playerId -1],
        normalize(goldSpent_arr)[playerId -1],
    ];

    let opponent_econ_data = [
        normalize(cs_arr)[opponentId -1],
        normalize(cs_arr)[opponentId -1],
        normalize(cs_arr)[opponentId -1],
    ];

    const classes = useStyles();

    return(
        <div>
            <Card className={classes.card}>
                <h2 className={classes.title_txt}>Income</h2>
                <MatchRadarChart
                    labels={['CS/Min', 'Gold Spent', 'Gold Earned']}
                    player_data={player_econ_data}
                    player_label={props.summonerName}
                    opponent_label={opponentName}
                    opponent_data={opponent_econ_data}
                />
            </Card>
        </div>
    )
}

export default IncomeCard;
