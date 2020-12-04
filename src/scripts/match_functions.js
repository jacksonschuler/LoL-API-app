const getChampNameFromChampID = (id, champions) => {
    if (champions !== {}) {
        if (champions.data) {
            let champs = Object.values(champions.data);
            for (let i = 0; i < champs.length; i++){
                if (champs[i].key === id.toString()) {
                    return champs[i].id
                }
            }
        }
    }
};

const getPlayerId = (summonerName, participants_arr) => {
    return participants_arr.filter(participant => participant.player.summonerName === summonerName)[0].participantId;
};

const getPlayerTimeline = (id, participants) => {
    return participants[id - 1]
};

const getOpponentName = (id, participants) => {
    return participants[id -1].player.summonerName;
};

const getOpposingTimeline = (role,lane, participants, teamId) => {
    if (lane !== 'BOTTOM') {
        return participants.filter(player => (player.timeline.lane === lane && player.teamId === teamId))[0]
    } else {
        return participants.filter(player => (player.timeline.role === role && player.timeline.lane === lane && player.teamId === teamId))[0]
    }
};

const computeKDA = (kills, deaths, assists) => {
    if (deaths === 0) {
        return ((kills + assists) / 1).toFixed(2)
    }
    return ((kills + assists) / deaths).toFixed(2)
};
const bgColor = (win_bool) => {
    if (win_bool) {
        return '#4eff4d';
    } else {
        return '#ff6c7d'
    }
};

const getCSPerMin = (totalCS, matchLength) => {
    return (totalCS/matchLength * 60).toFixed(1)
};

const getTotalKills = (match, teamId) => {
    let num_kills = 0;
    let filtered_match = match.participants.filter(player => player.teamId === teamId);
    filtered_match.forEach(player => {
        num_kills += player.stats.kills
    });
    return num_kills
};

const getKP = (myKills, myAssists, totalKills) => {
    return (((myKills + myAssists)/totalKills) * 100).toFixed(1)
};


module.exports = {
    getChampNameFromChampID: getChampNameFromChampID,
    computeKDA: computeKDA,
    bgColor: bgColor,
    getPlayerId: getPlayerId,
    getPlayerTimeline: getPlayerTimeline,
    getOpponentName: getOpponentName,
    getOpposingTimeline: getOpposingTimeline,
    getCSPerMin: getCSPerMin,
    getTotalKills: getTotalKills,
    getKP: getKP,
};
