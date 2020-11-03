import React, {useEffect, useState} from 'react'
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import config from "../../config";
import axios from "axios";

import iron from "../../static_data/Emblem_Iron.png"
import bronze from "../../static_data/Emblem_Bronze.png"
import silver from "../../static_data/Emblem_Silver.png"
import gold from "../../static_data/Emblem_Gold.png"
import platinum from "../../static_data/Emblem_Platinum.png"
import diamond from "../../static_data/Emblem_Diamond.png"
import master from "../../static_data/Emblem_Master.png"
import grandmaster from "../../static_data/Emblem_Grandmaster.png"
import challenger from "../../static_data/Emblem_Challenger.png"
import FeedbackRanked from "./feedback/feedback_ranked";


const useStyles = makeStyles((theme) => ({
    card: {
        borderRadius: 35,
        minWidth: 275,
        maxWidth: 275,
        minHeight: 444.25, //nice
        boxShadow: '0 16px 40px -12.125px rgba(0,0,0,0.3)',
        marginLeft: 15,
    },
    cards: {
        display: 'flex',
    },
    img_container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    img: {
        width:171,
        height: 195,
        backgroundSize: 'cover',
    },
    text:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Quicksand',
    }
}));

function determineRank(tier) {
    switch(tier){
        case 'IRON':
            return iron;
        case 'BRONZE':
            return bronze;
        case 'SILVER':
            return silver;
        case 'GOLD':
            return gold;
        case 'PLATINUM':
            return platinum;
        case 'DIAMOND':
            return diamond;
        case 'MASTER':
            return master;
        case 'GRANDMASTER':
            return grandmaster;
        case 'CHALLENGER':
            return challenger;
        default:
            return 'unexpected tier given';
    }
}

function determineRankedType(queueType) {
    if (queueType.substring(7,11) === 'FLEX') {
        return 'Ranked Flex'
    }
    return "Ranked Solo"
}

function calculateWR(num_wins, num_losses) {
    return Math.round(num_wins/(num_wins+num_losses)*100)
}

function toTitleCase(text) {
    return text.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}



function RankedCard(props) {
    const classes = useStyles();
    let [rankedInfo, setRankedInfo] = useState(undefined);
    useEffect(() => {
        const api_key = config.API_KEY;
        const api_call = 'https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/' + props.id + '?api_key=' + api_key;
        const proxy = `https://cors-anywhere.herokuapp.com/`; // Workaround for Riot API not returning CORS allowed header
        axios.get(`${proxy}${api_call}`).then((res) => {
            // we need a check here if the account exists...
            console.log(res.data);
            setRankedInfo(res.data)
        })
    }, [props.id]);

    return(
      <div className={classes.cards}>
          {rankedInfo !== undefined ? (
              rankedInfo.map(rank =>
                      <Card className={classes.card} key={rank.queueType}>
                          <div className={classes.text}>
                              <h4>{determineRankedType(rank.queueType)}</h4>
                          </div>
                          <div className={classes.img_container}>
                              <div className={classes.img} style={{backgroundImage: `url(${determineRank(rank.tier)})`,}}/>
                          </div>
                          <div className={classes.text}>
                              <h4>{toTitleCase(rank.tier)} : {rank.rank} - {rank.leaguePoints} LP</h4>
                          </div>
                          <div className={classes.text}>
                              {calculateWR(rank.wins, rank.losses)}% WR
                          </div>
                          <div className={classes.text}>
                              {rank.wins}W - {rank.losses}L
                          </div>
                      </Card>
                )
          ) : (
              <div className={classes.cards}>
                  <FeedbackRanked/>
                  <FeedbackRanked/>
              </div>
          )}
      </div>
    );
}

export default RankedCard;
