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

exports.getChampsJSON = functions.https.onRequest(async (req, res) => {
    return cors(req, res, () => {
        let version = req.query.version;
        if (req.method !== "GET") {
            return res.status(401).json({
                message: "Not allowed"
            });
        }
        axios.get('http://ddragon.leagueoflegends.com/cdn/' + version + '/data/en_US/champion.json').then(response => {
            return res.status(200).json(
                response.data
            )
        }).catch(err => {
                return res.status(500).json({
                    error: err
                })
            })
    })
});

exports.getMatches = functions.https.onRequest(async (req, res) => {
    return cors(req, res, () => {
        let account_id = req.query.acc_id;
        if (req.method !== "GET") {
            return res.status(401).json({
                message: "Not allowed"
            });
        }
        axios.get('https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/' + account_id
            + '?queue=420&endIndex=5&api_key=' + api_key).then(response => {
                return res.status(200).json(
                    response.data.matches.map(item=>item.gameId)
                )

        }).catch(err => {
            return res.status(500).json({
                error: err
            })
        })
    })
});

exports.getMatch = functions.https.onRequest(async (req, res) => {
    return cors(req, res, () => {
        let match_id = req.query.match_id;
        if (req.method !== "GET") {
            return res.status(401).json({
                message: "Not allowed"
            });
        }
        axios.get('https://na1.api.riotgames.com/lol/match/v4/matches/' + match_id + '?api_key=' + api_key).then(response => {
            return res.status(200).json(
                response.data
            )

        }).catch(err => {
            return res.status(500).json({
                error: err
            })
        })
    })
});

exports.getMatchTimeline = functions.https.onRequest(async (req, res) => {
    return cors(req, res, () => {
        let match_id = req.query.match_id;
        if (req.method !== "GET") {
            return res.status(401).json({
                message: "Not allowed"
            });
        }
        axios.get('https://na1.api.riotgames.com/lol/match/v4/timelines/by-match/' + match_id + '?api_key=' + api_key).then(response => {
            return res.status(200).json(
                response.data
            )

        }).catch(err => {
            return res.status(500).json({
                error: err
            })
        })
    })
});


