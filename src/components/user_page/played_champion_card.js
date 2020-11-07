import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import mastery_7 from '../../static_data/7.png';
import mastery_6 from '../../static_data/6.png';
import mastery_5 from '../../static_data/5.png';

const useStyles = makeStyles((theme) => ({
    card: {
        minHeight: 450,
        maxHeight: 450,
        minWidth: 330,
        maxWidth: 360,
        borderRadius: 7,
        boxShadow: '0 16px 40px -12.125px rgba(0,0,0,0.4)',
        marginBottom: 0,
    },
    card_container: {
        minWidth: '25vw',
        minHeight: '65vh',
        marginRight: 25,
    },
    img: {
        width: '100%',
        paddingBottom: '65.25%',
        clipPath: 'polygon(0 0, 100% 0%, 100% 84%, 0% 100%)',
        backgroundColor:'#ff215e',
        zIndex:-1,
    },
    content:{
        paddingRight:15,
        paddingLeft:15,
        marginTop:-20,
        zIndex: 5,
    },
    text: {
        display:'flex',
        justifyContent:'flex-end',
        fontFamily: 'Quicksand',
    },
    mastery: {
        position: 'relative',
        bottom: 0,
        left: 0,
        marginTop: -75,
        height:158/2,
        minHeight: 158/3,
        minWidth: 176/3,
        width:176/2,
        backgroundSize: 'cover',
    },
    champion_info: {
        marginTop: -15,
        display:'flex',
        justifyContent:'flex-end',
        fontFamily: 'Quicksand',
        paddingRight: 15,
    }

}));

function determine_mastery(level) {
    switch(level){
        case 7:
            return mastery_7;
        case 6:
            return mastery_6;
        case 5:
            return mastery_5;
        default:
            return ''
    }
}

function ChampionCard(props) {
    const classes = useStyles();
    return(
        <div className={classes.card_container}>
            <Card className={classes.card}>
                <CardMedia className={classes.img} style={{backgroundImage:`linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, .7)), url(${props.img})`}}>
                </CardMedia>
                <div className={classes.content}>
                    <h2 className={classes.text}>{props.name}</h2>
                    <div className={classes.mastery} style={{backgroundImage: `url(${determine_mastery(props.masterylvl)})`}}/>
                </div>
                <div className={classes.champion_info}>
                    {props.masterypts} pts.
                </div>
            </Card>
        </div>
    )
}

export default ChampionCard
