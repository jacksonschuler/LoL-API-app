import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import ChampionCard from "./played_champion_card";
import config from '../../config'
import axios from 'axios';

const useStyles = makeStyles((theme) => ({

    root: {
        paddingTop: '7vh',
        paddingLeft: '7vw',
        paddingRight: '7vw',
    },
    text: {
        fontFamily: 'Quicksand',
        marginBottom: '6vh'
    },
    cards: {
        display:'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
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

    useEffect(()=> {
        let version = config.GAME_VERSION;
        axios.get('http://ddragon.leagueoflegends.com/cdn/' + version + '/data/en_US/champion.json').then(res => {
            setChamps(res.data);
        });
        const api_call = 'https://us-central1-lol-api-project.cloudfunctions.net/getMasteryChamps?id=' + props.id;
        axios.get(api_call).then((res) => {
            // we need a check here if the account exists...
            if (res.data.length < 6) {
                setMasteryInfo(res.data);
            } else {
                setMasteryInfo(res.data.slice(0,6))
            }
        })
    }, [props.id]);

    const classes = useStyles();
    return(
        <div className={classes.root}>
            <h2 className={classes.text}>Most Played Champions</h2>
            <div className={classes.cards}>
                {masteryInfo ? (
                    masteryInfo.map(champ =>
                        <ChampionCard
                            name={getChampNameFromChampID(champ.championId, champs)}
                            img={'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/' + getChampNameFromChampID(champ.championId, champs) +'_0.jpg'}
                            masterypts={champ.championPoints}
                            masterylvl={champ.championLevel}
                        />
                    )
                ) : (
                    <div/>
                )}
            </div>
        </div>
    )
}

export default MostPlayedChamps
