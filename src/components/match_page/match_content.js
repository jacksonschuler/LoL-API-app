import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import DamageCard from "./dmg_card";
import UtilityCard from "./util_card";
import IncomeCard from "./income_card";
import BackButton from "./back_button";
import MatchPlayerCard from "./match_player_card";

const useStyles = makeStyles((theme) => ({
    color_divider: {
        backgroundImage: 'linear-gradient(to right, #bc4e9c, #f80759)',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: 400,
        zIndex: -1,
    },
    cards: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 50,
    },
}));


function MatchContent(props) {

    let classes = useStyles();

    return(
        <div>
            <BackButton/>
            <div className={classes.color_divider}/>
            <div style={{marginTop:150}}>
                <div className={classes.cards}>
                    <MatchPlayerCard
                        match={props.match}
                        summonerName={props.summonerName}
                        isPlayer={true}
                    />
                    <MatchPlayerCard
                        match={props.match}
                        summonerName={props.summonerName}
                        isPlayer={false}
                    />
                </div>
            </div>
            <div className={classes.cards}>
                <DamageCard
                    match={props.match}
                    summonerName={props.summonerName}
                />
                <UtilityCard
                    match={props.match}
                    summonerName={props.summonerName}
                />
                <IncomeCard
                    match={props.match}
                    summonerName={props.summonerName}
                />
            </div>
        </div>
    )
}

export default MatchContent;
