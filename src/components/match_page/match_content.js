import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import MatchRadarChart from "./match_radar_chart";

const useStyles = makeStyles((theme) => ({
    color_divider: {
        backgroundImage: 'linear-gradient(to right, #bc4e9c, #f80759)',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: 400,
        zIndex: -1,
    },
    footer: {
        height: '20vh',
    }
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


function MatchContent(props) {

    let playerId = getPlayerId(props.summonerName, props.match['participantIdentities']);

    let playerTimeline = getPlayerTimeline(playerId, props.match['participants']);

    let opponentTimeline = getOpposingTimeline(playerTimeline.timeline.role, playerTimeline.timeline.lane, props.match['participants']);

    let opponentName = getOpponentName(opponentTimeline.participantId, props.match['participantIdentities']);

    let classes = useStyles();

    console.log(playerId);

    console.log(playerTimeline);

    console.log(opponentTimeline);

    console.log(opponentName);

    return(
        <div>
            <MatchRadarChart/>
            Match Page
            <div className={classes.footer}/>
        </div>
    )
}

export default MatchContent;
