import React, {useEffect, useState} from 'react';
import axios from 'axios'
import config from "../config";

function UserPage(props) {
    let [summonerInfo, setSummonerInfo] = useState({});
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
            User Page
        </div>
    )
}
export default UserPage;
