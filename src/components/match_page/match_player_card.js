import React, {useEffect, useState} from 'react';
import config from "../../config";
import axios from "axios";
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";
import MatchPageCardContent from "./match_page_card_content";

const useStyles = makeStyles((theme) => ({
    card: {
        padding:15,
        borderRadius: 7,
        minWidth: 330,
        maxWidth: 330,
        minHeight: 500,
        boxShadow: '0 16px 40px -12.125px rgba(0,0,0,0.4)',
        margin: 7.5,
        position:'relative',
    },
}));

function MatchPlayerCard(props) {

    const match_functions = require('../../scripts/match_functions');

    useEffect(() => {
        let game_version = config.GAME_VERSION;
        axios.get('https://us-central1-lol-api-project.cloudfunctions.net/getChampsJSON?version=' + game_version).then(res => {
            setChamps(res.data);
        });
    }, []);

    let [champs, setChamps] = useState(undefined);

    const classes = useStyles();

    let playerId = match_functions.getPlayerId(props.summonerName, props.match['participantIdentities']);

    let playerTimeline = match_functions.getPlayerTimeline(playerId, props.match['participants']);

    let oppTeamId = playerTimeline.teamId === 100 ? 200 : 100;

    let opponentTimeline = match_functions.getOpposingTimeline(playerTimeline.timeline.role, playerTimeline.timeline.lane, props.match['participants'], oppTeamId);

    let opponentName = match_functions.getOpponentName(opponentTimeline.participantId, props.match['participantIdentities']);


    return(
        <div>
            <Card className={classes.card}>
                {props.isPlayer ? (
                    <div>
                        <MatchPageCardContent
                            champs={champs}
                            timeline={playerTimeline}
                            name={props.summonerName}
                            gameDuration={props.match.gameDuration}
                        />
                    </div>
                ) : (
                    <div>
                        <MatchPageCardContent
                            champs={champs}
                            timeline={opponentTimeline}
                            name={opponentName}
                            gameDuration={props.match.gameDuration}
                        />
                    </div>
                )}
                <div style={{minWidth: 360, maxWidth: 360 ,height:30, backgroundColor: props.isPlayer ? 'rgba(255,34,57,0.6)' : 'rgba(0,30,255,0.6)',
                    position: 'absolute', bottom: 0, left: 0,}}/>
            </Card>
        </div>
    )
}

export default MatchPlayerCard
