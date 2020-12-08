import React, {useEffect, useState} from 'react'
import axios from "axios";
import MatchContent from "../components/match_page/match_content";
import MatchGraphCard from "../components/match_page/match_graph_card";



function MatchPage(props) {
    let [match, setMatch] = useState(undefined);

    const match_functions = require('../scripts/match_functions');

    let [timeline, setTimeline] = useState(undefined);

    useEffect(() => {
        axios.get('https://us-central1-lol-api-project.cloudfunctions.net/getMatch?match_id=' + props.match.params.match_id).then(res => {
            // we need the player, the opponent timelines.
            setMatch(res.data)
        });
        axios.get('https://us-central1-lol-api-project.cloudfunctions.net/getMatchTimeline?match_id=' + props.match.params.match_id).then(res => {
            // we need the player, the opponent timelines.
            setTimeline(res.data)
        });
    }, [props.match.params.match_id]);

    return(
        <div>
            {match ? (
                <MatchContent match={match} summonerName={props.match.params.name}
                />
            ) : (
                <div/>
            )}
            {timeline && match ? (
                <MatchGraphCard
                    oppid={match_functions.getOpposingTimeline(
                        match_functions.getPlayerTimeline(match_functions.getPlayerId(props.match.params.name, match['participantIdentities']), match['participants']).timeline.role,
                        match_functions.getPlayerTimeline(match_functions.getPlayerId(props.match.params.name, match['participantIdentities']), match['participants']).timeline.lane,
                        match['participants'],
                        match_functions.getPlayerTimeline(match_functions.getPlayerId(props.match.params.name, match['participantIdentities']), match['participants']).teamId === 100 ? 200 : 100
                    ).participantId
                    }
                    plid={match_functions.getPlayerId(props.match.params.name, match['participantIdentities'])}
                    timeline={timeline}
                    playerName={props.match.params.name}
                    oppName={match['participantIdentities'][match_functions.getOpposingTimeline(
                        match_functions.getPlayerTimeline(match_functions.getPlayerId(props.match.params.name, match['participantIdentities']), match['participants']).timeline.role,
                        match_functions.getPlayerTimeline(match_functions.getPlayerId(props.match.params.name, match['participantIdentities']), match['participants']).timeline.lane,
                        match['participants'],
                        match_functions.getPlayerTimeline(match_functions.getPlayerId(props.match.params.name, match['participantIdentities']), match['participants']).teamId === 100 ? 200 : 100
                    ).participantId-1].player.summonerName}
                />
            ): (
                <div/>
            )}
        <div style={{height: '20vh'}}/>
        </div>
    )
}

export default MatchPage;
