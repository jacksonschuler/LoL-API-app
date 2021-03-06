import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import ChampionCard from "./played_champion_card";
import config from '../../config'
import axios from 'axios';
import FeedbackMostPlayedGroup from "./feedback/feedback_most_played_champs";

const useStyles = makeStyles((theme) => ({

    root: {
        paddingTop: 55,
        paddingLeft: '13vw',
        paddingRight: '13vw',
    },
    cards: {
        display:'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        justifyContent: 'space-evenly',
        '@media (max-width: 500px)' : {
            gridTemplateColumns: 'repeat(1, 1fr)',
        }
    }
}));


function getChampNameFromChampID(id, champions){
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
}

function MostPlayedChamps(props) {

    let [champs, setChamps] = useState({});
    let [masteryInfo, setMasteryInfo] = useState(undefined);

    //TODO move this the user tabs, to avoid the query being ran multiple times rather than just on the page load
    useEffect(()=> {
        let game_version = config.GAME_VERSION;
        axios.get('https://us-central1-lol-api-project.cloudfunctions.net/getChampsJSON?version=' + game_version).then(res => {
            setChamps(res.data);
        });
        const api_call = 'https://us-central1-lol-api-project.cloudfunctions.net/getMasteryChamps?id=' + props.id;
        axios.get(api_call).then((res) => {
            if (res.data.length < 6) {
                setMasteryInfo(res.data);
            } else {
                setMasteryInfo(res.data.slice(0,6));
            }
        });

    }, [props.id]);

    const classes = useStyles();
    return(
        <div className={classes.root}>
            <div className={classes.cards}>
                {masteryInfo ? (
                    masteryInfo.map(champ =>
                        <ChampionCard
                            key={champ.championId}
                            name={getChampNameFromChampID(champ.championId, champs)}
                            img={'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/' + getChampNameFromChampID(champ.championId, champs) +'_0.jpg'}
                            masterypts={champ.championPoints}
                            masterylvl={champ.championLevel}
                        />
                    )
                ) : (
                    <div>
                        <FeedbackMostPlayedGroup/>
                    </div>
                )}
            </div>
        </div>
    )
}

export default MostPlayedChamps
