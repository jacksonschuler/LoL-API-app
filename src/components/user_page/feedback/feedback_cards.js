import React from 'react'
import {makeStyles} from "@material-ui/core/styles";
import FeedbackRanked from "./feedback_ranked";
import FeedbackSummoner from "./feedback_summoner";


const useStyles = makeStyles((theme) => ({
    cards: {
        display: 'flex',
    },
}));

function FeedbackCards() {
    const classes = useStyles();
    return(
        <div className={classes.cards}>
            <FeedbackSummoner/>
            <FeedbackRanked/>
            <FeedbackRanked/>
        </div>
    )
}

export default FeedbackCards
