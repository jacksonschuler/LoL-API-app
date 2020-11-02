import React, {useEffect, useState} from 'react';
import axios from 'axios'
import config from "../config";
import SummonerCard from "../components/user_page/summoner_card";
import LoadingSummonerCard from "../components/user_page/loading_summoner_card";

/**
 * Info i wanna show
 * Icon
 * Rank (solo/duo) -- because thats all that matters
 * Level
 * Top Champs
 * */

function UserPage(props) {
    let [summonerInfo, setSummonerInfo] = useState(undefined);
    useEffect(() => {
        const api_key = config.API_KEY;
        const api_call = 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + props.match.params.name + '?api_key=' + api_key;
        const proxy = `https://cors-anywhere.herokuapp.com/`; // Workaround for Riot API not returning CORS allowed header
        axios.get(`${proxy}${api_call}`).then((res) => {
            console.log(res.data);
            setSummonerInfo(res.data)
        })
    }, [props.match.params.name]);

    return(
        <div>
            {summonerInfo ? (
                <SummonerCard
                    name={summonerInfo.name}
                    profile_icon={summonerInfo.profileIconId}
                    level={summonerInfo.summonerLevel}
                    region={'NA'}
                />
            ) : (
                <LoadingSummonerCard/>
            )}
        </div>
    )
}
export default UserPage;
