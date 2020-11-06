import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles((theme) => ({
    card: {
        minHeight: '60vh',
        borderRadius: 7,
        boxShadow: '0 16px 40px -12.125px rgba(0,0,0,0.4)',
    },
    card_container: {
        width: '25vw',
        minHeight: '65vh',
        marginBottom: '3vh',
        marginRight: '3vh',
    },
    img: {
        width: '100%',
        paddingBottom: '65.25%',
        clipPath: 'polygon(0 0, 100% 0%, 100% 84%, 0% 100%)',
        backgroundColor:'#ff215e',
    },
    content:{
        paddingRight:15,
        paddingLeft:15,
        display:'flex',
        justifyContent:'flex-end',
        marginTop:-20,
    },
    text: {
        fontFamily: 'Quicksand',
    }

}));


function ChampionCard(props) {
    const classes = useStyles();
    let img = 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Azir_0.jpg';
    return(
        <div className={classes.card_container}>
            <Card className={classes.card}>
                <CardMedia className={classes.img} style={{backgroundImage:`linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, .7)), url(${props.img})`}}>
                </CardMedia>
                <div className={classes.content}>
                    <h2 className={classes.text}>{props.name}</h2>
                </div>
            </Card>
        </div>
    )
}

export default ChampionCard
