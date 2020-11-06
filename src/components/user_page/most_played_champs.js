import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import ChampionCard from "./played_champion_card";

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
        alignItems: 'center',
        justifyContent: 'center',
    }
}));


function MostPlayedChamps() {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <h2 className={classes.text}>Most Played Champions</h2>
            <div className={classes.cards}>
                <ChampionCard
                    name={'Azir'}
                    img={'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Azir_0.jpg'}
                />
            </div>
        </div>
    )
}

export default MostPlayedChamps
