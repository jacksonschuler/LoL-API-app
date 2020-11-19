import React, {useEffect} from 'react'
import axios from "axios";
import MatchCard from "./match_card";
import TabPanel from "@material-ui/lab/TabPanel";
import FeedbackMatchCardGroup from "./feedback/feedback_match_cardgroup";

function Matches(props) {

    const [matchesState, setMatchesState] = React.useState(undefined);

    useEffect(() => {
        // get the 10 most recent matches
        let matches = [];
        const api_call = 'https://us-central1-lol-api-project.cloudfunctions.net/getMatches?acc_id=' + props.account_id;
        axios.get(api_call).then((res) => {
            res.data.forEach(match => {
                axios.get('https://us-central1-lol-api-project.cloudfunctions.net/getMatch?match_id=' + match).then(response => {
                    matches.push(response.data);
                    if (matches.length === 5) {
                        setMatchesState(matches);    //TODO UNCOMMMENT WHEN DONE
                    }
                })
            });
        });
    }, []);

    return(
        <div>
            {matchesState ? (
                matchesState.map(match =>
                    <MatchCard
                        key={match.gameId}
                        summonerName={props.summonerName}
                        match={match}
                    />
                )
            ) : (<div><FeedbackMatchCardGroup/></div>)}
        </div>
    )
}

export default Matches;
