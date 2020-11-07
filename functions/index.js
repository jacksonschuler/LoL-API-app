const functions = require('firebase-functions');
const axios = require('axios');
const cors = require('cors')({ origin: true });
const api_key = functions.config().api.key;

// CHANGING THE API KEY
// firebase functions:config:set api.key="new_key"


exports.getSummoner = functions.https.onRequest(async (req, res) => {
    return cors(req, res, () => {
        let summoner_name = req.query.name;

        if (req.method !== "GET") {
            return res.status(401).json({
                message: "Not allowed"
            });
        }
        return axios.get('https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + summoner_name +
            '?api_key='+api_key)
            .then(response => {
                console.log(response.data);
                return res.status(200).json(
                    response.data
                )
            })
            .catch(err => {
                return res.status(500).json({
                    error: err
                })
            })

    })
});

exports.getRankedInfo = functions.https.onRequest(async (req, res) => {
    return cors(req, res, () => {
        let summoner_id = req.query.id;
        if (req.method !== "GET") {
            return res.status(401).json({
                message: "Not allowed"
            });
        }
        return axios.get('https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/' + summoner_id +
            '?api_key=' + api_key)
            .then(response => {
                console.log(response.data);
                return res.status(200).json(
                    response.data
                )
            })
            .catch(err => {
                return res.status(500).json({
                    error: err
                })
            })

    })
});

exports.getMasteryChamps = functions.https.onRequest(async (req, res) => {
    return cors(req, res, () => {
        let summoner_id = req.query.id;

        if (req.method !== "GET") {
            return res.status(401).json({
                message: "Not allowed"
            });
        }
        return axios.get('https://na1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/' + summoner_id +
            '?api_key='+api_key)
            .then(response => {
                console.log(response.data);
                return res.status(200).json(
                    response.data
                )
            })
            .catch(err => {
                return res.status(500).json({
                    error: err
                })
            })

    })
});
