import React, {useEffect, useState} from 'react'
import axios from "axios";


function getPlayerId(summonerName, participants_arr) {
    return participants_arr.filter(participant => participant.player.summonerName === summonerName)[0].participantId;
}

function getPlayerTimeline(id, participants) {
    return participants[id - 1]
}

function getOpposingTimeline(role,lane, participants) {
    return participants.filter(player => (player.timeline.role === role && player.timeline.lane === lane))[0]
}


function MatchPage(props) {
    let [match, setMatch] = useState(undefined);

    useEffect(() => {
        axios.get('https://us-central1-lol-api-project.cloudfunctions.net/getMatch?match_id=' + props.match.params.match_id).then(res => {
            setMatch(res.data);
        });
    }, [props.match.params.match_id]);


    return(
        <div>
        </div>
    )
}

export default MatchPage;
