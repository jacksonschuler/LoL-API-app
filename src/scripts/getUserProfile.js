function getSummonerProfile(name){
    const request = require('request');

    const options  = {
        url: 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + name,
        method: 'GET',
        headers: {
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36",
            "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8",
            "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
            "Origin": "https://developer.riotgames.com",
            "X-Riot-Token": "RGAPI-2b34536f-018d-4b55-aa25-b3b79ce87a25"
        },
    };

    request(options, function(err, res, body) {
        let json = JSON.parse(body);
        console.log(json)
    });

}

module.exports = {
    getSummonerProfile: getSummonerProfile
};
