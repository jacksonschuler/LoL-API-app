import React, {useEffect, useState} from 'react';
import axios from 'axios'
import SummonerCard from "../components/user_page/summoner_card";
import FeedbackCards from "../components/user_page/feedback/feedback_cards";
import RankedCard from "../components/user_page/ranked_card";
import {makeStyles} from "@material-ui/core/styles";
import UserNav from "../components/user_page/nav_bar";
import MostPlayedChamps from "../components/user_page/most_played_champs";
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
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 100,
    },
    color_divider: {
        backgroundImage: 'linear-gradient(to right, #bc4e9c, #f80759)',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '60vh',
        zIndex: -1,
    },
    footer: {
        height: '20vh',
    }
}));


function UserPage(props) {
    let [summonerInfo, setSummonerInfo] = useState(undefined);
    const classes = useStyles();
    useEffect(() => {
        const api_call = 'https://us-central1-lol-api-project.cloudfunctions.net/getSummoner?name=' + props.match.params.name;
        axios.get(api_call).then((res) => {
            // we need a check here if the account exists...
            setSummonerInfo(res.data)
        })
    }, [props.match.params.name]);

    return(
        <div>
            <UserNav/>
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
            <div className={classes.color_divider}/>
            {summonerInfo ? (
                <MostPlayedChamps
                    id={summonerInfo.id}
                />) : (
                    <div/>
            )}
            <div className={classes.footer}/>
        </div>
    )
}
export default UserPage;
