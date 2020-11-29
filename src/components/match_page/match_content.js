import React from "react";

function getPlayerId(summonerName, participants_arr) {
    return participants_arr.filter(participant => participant.player.summonerName === summonerName)[0].participantId;
}

function getPlayerTimeline(id, participants) {
    return participants[id - 1]
}

function getOpposingTimeline(role,lane, participants) {
    return participants.filter(player => (player.timeline.role === role && player.timeline.lane === lane))[0]
}


function MatchContent(props) {

    let playerId = getPlayerId(props.summonerName, props.match['participantIdentities']);

    let playerTimeline = getPlayerTimeline(playerId, props.match['participants']);

    let opponentTimeline = getOpposingTimeline(playerTimeline.timeline.role, playerTimeline.timeline.lane, props.match['participants']);

    console.log(playerId);

    console.log(playerTimeline);

    console.log(opponentTimeline);

    return(
        <div>

        </div>
    )
}

export default MatchContent;
