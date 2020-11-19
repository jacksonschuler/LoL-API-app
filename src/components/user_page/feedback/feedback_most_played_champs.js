import React from 'react'
import {makeStyles} from "@material-ui/core/styles";
import FeedbackMostPlayedCard from "./feedback_most_played_champ_card";

const useStyles = makeStyles((theme) => ({

    root: {
        paddingTop: 55,
        paddingLeft: '13vw',
        paddingRight: '13vw',
    },
    text: {
        fontFamily: 'Quicksand',
        marginBottom: '6vh'
    },
    cards: {
        display:'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        justifyContent: 'space-evenly',
        '@media (max-width: 400px)' : {
            gridTemplateColumns: 'repeat(1, 1fr)',
        }
    }
}));


function FeedbackMostPlayedGroup() {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <div className={classes.cards}>
                <FeedbackMostPlayedCard/>
                <FeedbackMostPlayedCard/>
                <FeedbackMostPlayedCard/>
                <FeedbackMostPlayedCard/>
                <FeedbackMostPlayedCard/>
                <FeedbackMostPlayedCard/>
            </div>
        </div>
    )
}

export default FeedbackMostPlayedGroup;
