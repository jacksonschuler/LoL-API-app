import config from '../config'

export default function getSummonerProfile(name){
    const request = require('request');

    const api_key = config.API_KEY;

    const api_call = 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + name + '?api_key=' + api_key;

    const proxy = `https://cors-anywhere.herokuapp.com/`; // Workaround for Riot API not returning CORS allowed header

    const options  = {
        url: `${proxy}${api_call}`,
        json:true,
    };

    request.get(options, function(err, res, body) {
        console.log(body)
    });

}

