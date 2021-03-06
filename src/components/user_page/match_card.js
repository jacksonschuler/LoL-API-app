import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import config from '../../config';
import axios from "axios";
import IconButton from "@material-ui/core/IconButton";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


const useStyles = makeStyles((theme) => ({
    card: {
        width: '855px',
        '@media (max-width: 400px)' : {
            width: '100%',
        },
        height: '100%',
        borderRadius: 7,
        boxShadow: '0 16px 40px -12.125px rgba(0,0,0,0.4)',
        padding: 10,
    },
    card_content: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    card_container: {
        width: '100%',
        minHeight: '15vh',
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 9
    },
    rune_container: {
        marginLeft: 10,
        width: 60,
        height: '100%',
        display: 'grid',
        justifyContent: 'center',
    },
    champ_icon_container: {
        width: 95,
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    summoners_container: {
        width: 30,
        height: '60%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    runes_primary: {
        height: 50,
        width: 50,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    },
    runes_secondary: {
        height: 20,
        width:20,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        margin: 'auto',
    },
    champ_img: {
        width: 80,
        height: 80,
        borderRadius: 7,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        boxShadow: '0 16px 40px -12.125px rgba(0,0,0,0.3)',
    },
    summoner_spell: {
        height:30,
        width: 30,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        borderRadius: 5,
    },
    kda_container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 90,
        height: '100%',
        flexWrap: 'wrap',
    },
    kda_text: {
        fontFamily: 'Quicksand',
        fontWeight: 300,
    },
    player_info: {
        display: 'flex',
        alignItems: 'center',
    },
    items_container: {
        '@media (max-width: 400px)' : {
            display: 'none'
        },
        display: 'grid',
        gridTemplateColumns: '35px 35px 35px',
        gridTemplateRows: '35px 35px',
        columnGap: '5px',
        rowGap: '5px',
    },
    item: {
        '@media (max-width: 400px)' : {
            display: 'none'
        },
        backgroundColor: '#a9a9a9',
        borderRadius: 5,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    },
    match_info: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: '100%',
        flexWrap: 'wrap',
    }
}));

function getSummonerSpellFromId(spell_id) {
    return `http://ddragon.leagueoflegends.com/cdn/${config.GAME_VERSION}/img/spell/${config.SUMMONERS[spell_id]}.png`;
}

function getRune(isPrimary, primaryCode, runeId, runes){
    if (isPrimary) {
        let iconURL = runes.filter(rune => rune.id === primaryCode)[0];
        let runesURL = iconURL.slots[0].runes.filter(rune => rune.id === runeId)[0];
        return 'http://ddragon.leagueoflegends.com/cdn/img/' + runesURL.icon;

    } else {
        let iconURL = runes.filter(rune => rune.id === runeId)[0];
        return 'http://ddragon.leagueoflegends.com/cdn/img/' + iconURL.icon;
    }
}
function MatchCard(props) {

    const match_functions = require('../../scripts/match_functions');

    const classes = useStyles();

    let [champs, setChamps] = useState({});

    let runes = require('../../runesReforged');

    let main_id = match_functions.getPlayerId(props.summonerName, props.match.participantIdentities); // get the participant idea of the queried summoner

    let main_obj = match_functions.getPlayerTimeline(main_id, props.match.participants);

    useEffect(() => {
        let game_version = config.GAME_VERSION;
        axios.get('https://us-central1-lol-api-project.cloudfunctions.net/getChampsJSON?version=' + game_version).then(res => {
            setChamps(res.data);
        });
    }, []);

    return(
        <div className={classes.card_container}>
            <Card className={classes.card}>
                <div className={classes.card_content}>
                    <div className={classes.player_info}>
                        <div className={classes.rune_container}>
                            <div className={classes.runes_primary} style={{backgroundImage: `url(${getRune(true, main_obj.stats.perkPrimaryStyle, main_obj.stats.perk0, runes)})`}}/>
                            <div className={classes.runes_secondary} style={{backgroundImage: `url(${getRune(false, 0, main_obj.stats.perkSubStyle, runes)})`}}/>
                        </div>
                        <div className={classes.champ_icon_container}>
                            <div className={classes.champ_img} style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/champs_icons/' + match_functions.getChampNameFromChampID(main_obj.championId, champs) + '.png'})`}}/>
                        </div>
                        <div className={classes.summoners_container}>
                            <div className={classes.summoner_spell} style={{backgroundImage: `url(${getSummonerSpellFromId(main_obj.spell1Id)})`, marginBottom: 10}}/>
                            <div className={classes.summoner_spell} style={{backgroundImage: `url(${getSummonerSpellFromId(main_obj.spell2Id)})`}}/>
                        </div>
                    </div>
                    <div className={classes.kda_container}>
                        <h3 className={classes.kda_text} style={{marginBottom: -20}}>{main_obj.stats.kills} / {main_obj.stats.deaths} / {main_obj.stats.assists}</h3>
                        <h4 className={classes.kda_text} style={{fontWeight: 400,marginBottom: -20}}>{match_functions.computeKDA(main_obj.stats.kills, main_obj.stats.deaths, main_obj.stats.assists)} KDA</h4>
                        <h5 style={{color: match_functions.bgColor(main_obj.stats.win)}}>{main_obj.stats.win === true ? '[VICTORY]': '[DEFEAT]'}</h5>
                    </div>
                    <div className={classes.match_info}>
                        <h4 className={classes.kda_text} style={{marginBottom: -20}}>Level {main_obj.stats.champLevel}</h4>
                        <h4 className={classes.kda_text} style={{marginBottom: -20}}>{main_obj.stats.totalMinionsKilled + main_obj.stats.neutralMinionsKilled} ({match_functions.getCSPerMin(main_obj.stats.totalMinionsKilled + main_obj.stats.neutralMinionsKilled, props.match.gameDuration)}) CS</h4>
                        <h4 className={classes.kda_text}>Kill P. {match_functions.getKP(main_obj.stats.kills, main_obj.stats.assists, match_functions.getTotalKills(props.match, main_obj.teamId))} %</h4>
                    </div>
                    <div className={classes.items_container}>
                        <div className={classes.item} style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/items/' + main_obj.stats.item0 + '.png'})`}}>
                        </div>
                        <div className={classes.item} style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/items/' + main_obj.stats.item1 + '.png'})`}}>
                        </div>
                        <div className={classes.item} style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/items/' + main_obj.stats.item2 + '.png'})`}}>
                        </div>
                        <div className={classes.item} style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/items/' + main_obj.stats.item3 + '.png'})`}}>
                        </div>
                        <div className={classes.item} style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/items/'+ main_obj.stats.item4 + '.png'})`}}>
                        </div>
                        <div className={classes.item} style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/items/' + main_obj.stats.item5 + '.png'})`}}>
                        </div>
                    </div>
                    <IconButton onClick={() => {window.location.href = `/summoner/${props.summonerName}/match/${props.match.gameId}`}}>
                        <ArrowForwardIosIcon/>
                    </IconButton>
                </div>
            </Card>
        </div>
    )
}

export default MatchCard;
