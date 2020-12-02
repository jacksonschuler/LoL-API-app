import React, {useEffect, useState} from 'react'
import axios from "axios";
import MatchContent from "../components/match_page/match_content";



function MatchPage(props) {
    let [match, setMatch] = useState(undefined);

    useEffect(() => {
        axios.get('https://us-central1-lol-api-project.cloudfunctions.net/getMatch?match_id=' + props.match.params.match_id).then(res => {
            // we need the player, the opponent timelines.
            setMatch(res.data)
        });
    }, []);

    return(
        <div>
            {match ? (
                <MatchContent match={match} summonerName={props.match.params.name}/>
            ) : (
                <div/>
            )}
        </div>
    )
}

export default MatchPage;
