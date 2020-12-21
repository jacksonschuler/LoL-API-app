import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import {Line} from 'react-chartjs-2'
const useStyles = makeStyles((theme) => ({
    card: {
        padding:15,
        borderRadius: 7,
        minWidth: 1080,
        maxWidth: 1080,
        minHeight: 500,
        boxShadow: '0 16px 40px -12.125px rgba(0,0,0,0.4)',
        margin: 7.5,
        position:'relative',
    },
    cards: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 50,
    },
    title_txt: {
        marginLeft: 5,
        marginTop: -2,
        fontFamily: 'Quicksand',
    },
    title: {
        display:'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: 50
    },
    footer: {
        height: '20vh',
    },
}));

function getIdx(frame, id){
    let vals = Object.values(frame);
    for (let i = 0; i < vals.length; i++) {
        if (vals[i].participantId === id) {
            return i + 1;
        }
    }
}

function FormatChart(timeline) {
    let data = [];
    for (let i = 0; i < timeline.length; i++) {
        let pt = {
            x: i,
            y: timeline[i].totalGold,
        }
        data.push(pt);
    }
    return data;
}

function MatchGraphCard(props) {

    const classes = useStyles();

    let matchTimeline = props.timeline.frames.map(item => item.participantFrames);

    let player_index = getIdx(matchTimeline[0], props.plid);

    let playerTimeline = matchTimeline.map(item => item[player_index]);

    let opp_index = getIdx(matchTimeline[0], props.oppid);

    let opponentTimeline = matchTimeline.map(item => item[opp_index]);

    let chartPlayerData = FormatChart(playerTimeline);

    let chartOppData = FormatChart(opponentTimeline);

    return(
        <div className={classes.cards}>
            <Card className={classes.card}>
                <div className={classes.title}>
                    <h2 className={classes.title_txt}>Income Over Time</h2>
                    <div style={{display:'flex',justifyContent: 'center'}}>
                        <div style={{display:'flex', alignItems: 'center'}}>
                            <div style={{height: 10, width: 10, borderRadius: '50%', backgroundColor:'rgba(255,34,57,0.6)', marginRight: 10}}/>
                            <h5 style={{fontFamily:'Quicksand'}}>{props.playerName}</h5>
                        </div>
                        <div style={{marginLeft:30, display: 'flex', alignItems: 'center'}}>
                            <div style={{height: 10, width: 10, borderRadius: '50%', backgroundColor:'rgba(0,30,255,0.6)', marginRight: 10}}/>
                            <h5 style={{fontFamily:'Quicksand'}}>{props.oppName}</h5>
                        </div>
                    </div>
                </div>
                <div>
                    <Line
                        data={{
                            labels: chartPlayerData.map(item => item.x),
                            datasets: [
                                {
                                    label: player_index,
                                    data: chartPlayerData.map(item => item.y),
                                    backgroundColor: 'rgba(255,34,57,0.6)',
                                    pointRadius: 0,
                                },
                                {
                                    label: opp_index,
                                    data: chartOppData.map(item => item.y),
                                    backgroundColor: 'rgba(0,30,255,0.6)',
                                    pointRadius: 0,
                                },
                            ]
                        }}
                        options={{
                            scales: {
                                yAxes: [{
                                    display: true,
                                    ticks: {
                                        fontFamily: 'Quicksand',
                                        suggestedMin: 0,
                                        suggestedMax: Math.max(chartPlayerData[chartPlayerData.length-1].y, chartOppData[chartOppData.length-1].y),
                                    }
                                }],
                                xAxes: [{
                                    display: true,
                                    ticks: {
                                        fontFamily: 'Quicksand',
                                        suggestedMin: 0,
                                        suggestedMax: opponentTimeline.length,
                                    }
                                }],
                            },
                            legend: {
                                display: false,
                            },
                            tooltips: {
                                enabled: false,
                            },
                        }}
                    />
                </div>
            </Card>
        </div>
    )
}

export default MatchGraphCard
