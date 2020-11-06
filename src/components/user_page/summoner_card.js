import React from 'react'
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";


const useStyles = makeStyles((theme) => ({
    card: {
        borderRadius: 7,
        minWidth: 275,
        maxWidth: 275,
        minHeight: 420, //nice
        boxShadow: '0 16px 40px -12.125px rgba(0,0,0,0.4)',
        backgroundColor: '#fff'
    },
    card_wave_svg: {
        position: 'relative',
        display: 'block',
        width: 'calc(100% + 1.3px)',
        height: 91
    },
    name: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: -35,
        fontFamily: 'Quicksand',
    },
    avatar_container: {
        display: 'flex',
        padding: 16
    },
    avatar: {
        padding: 5,
        height: 30,
        width: 30,
        marginRight: theme.spacing(1),
        fontFamily: 'Quicksand'
    },
    img : {
        width:200,
        height: 200,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        borderRadius: 35,
        borderStyle: 'solid',
        borderColor: '#fff',
        borderWidth: '5px',
        zIndex: 2,
        boxShadow: '0 16px 40px -12.125px rgba(0,0,0,0.3)',
    },
    img_container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -225,
        marginBottom: 15
    },
    divider: {
        marginTop: 30,
        marginLeft: 40,
        marginRight: 40
    },
    level_text: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: -35,
        fontFamily: 'Quicksand',
        color:'#7b7b7b'
    }
}));

/*
* Additional Notes:
*  - wanna make the level lighter gray
*  Series of avatars on the bottom displaying:
*  region
*
* */

function SummonerCard(props) {
    const classes = useStyles();

    const name = props.name;
    const profile_icon = `http://ddragon.leagueoflegends.com/cdn/10.22.1/img/profileicon/${props.profile_icon}.png`;
    const level = props.level;
    const region = props.region;

    return(
        <div>
            <Card className={classes.card}>
                <div style={{height: 255, marginBottom: -90}}/>
                <div style={{marginBottom: 25}}/>
                <div className={classes.img_container}>
                    <div className={classes.img} style={{backgroundImage: `url(${profile_icon})`}}/>
                </div>
                <div className={classes.name}><h2>{name}</h2></div>
                <div className={classes.level_text}><h3>{level}</h3></div>
                <div className={classes.divider}/>
                <div className={classes.avatar_container}>
                    <Avatar className={classes.avatar}>{region}</Avatar>
                </div>
            </Card>
        </div>
    )
}

export default SummonerCard
