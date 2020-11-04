import React, {useEffect, useState} from 'react';
import axios from 'axios'
import SummonerCard from "../components/user_page/summoner_card";
import FeedbackCards from "../components/user_page/feedback/feedback_cards";
import RankedCard from "../components/user_page/ranked_card";
import {makeStyles} from "@material-ui/core/styles";
/**
 * Info i wanna show
 * Icon
 * Rank (solo/duo) -- because thats all that matters
 * Level
 * Top Champs
 * */

const useStyles = makeStyles((theme) => ({
    cards: {
        display: 'flex',
    }
}));


function UserPage(props) {
    let [summonerInfo, setSummonerInfo] = useState(undefined);
    const classes = useStyles();
    useEffect(() => {
        const api_call = 'https://us-central1-lol-api-project.cloudfunctions.net/getSummoner?name=' + props.match.params.name;
        axios.get(api_call).then((res) => {
            // we need a check here if the account exists...
            console.log(res.data);
            setSummonerInfo(res.data)
        })
    }, [props.match.params.name]);

    return(
        <div>
            {summonerInfo ? (
                <div className={classes.cards}>
                    <SummonerCard
                        name={summonerInfo.name}
                        profile_icon={summonerInfo.profileIconId}
                        level={summonerInfo.summonerLevel}
                        region={'NA'}
                    />
                    <RankedCard
                        id={summonerInfo.id}
                    />
                </div>

            ) : (
                <FeedbackCards/>
            )}
        </div>
    )
}
export default UserPage;
