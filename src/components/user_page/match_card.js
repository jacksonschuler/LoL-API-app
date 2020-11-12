import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles((theme) => ({
    card_container: {
        padding: '2%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: '70vw',
        minHeight: '10vh',
    },
    card: {
        width: '100%',
        height: '100%'
    }
}));


function MatchCard(props) {
    const classes = useStyles();
    console.log(props.match);
    return(
        <div className={classes.card_container}>
            <Card className={classes.card}>
                {props.test}
            </Card>
        </div>
    )
}

export default MatchCard;
