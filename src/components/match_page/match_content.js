import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import DamageCard from "./dmg_card";
import UtilityCard from "./util_card";
import IncomeCard from "./income_card";
import BackButton from "./back_button";

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
    footer: {
        height: '20vh',
    },
    cards: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 100,
    },
}));


function MatchContent(props) {

    let classes = useStyles();

    console.log(props.match);


    return(
        <div>
            <BackButton/>
            <div className={classes.color_divider}/>
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
            <div className={classes.footer}/>
        </div>
    )
}

export default MatchContent;
