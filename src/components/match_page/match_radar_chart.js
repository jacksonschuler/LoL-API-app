import React from 'react';
import {Radar} from 'react-chartjs-2'


function MatchRadarChart(props){

    /*
        Damage:
        - kill participation
        - kda
        - damage to champs
        - damage share (%)
        - damage taken
        - Damage per gold

        Utility:
        - vision score
        - total healing
        - wards purchased
        - turret kills
        - wards placed
        - crowd control score

        Income
        - CS/Min
        - gold spent
        - gold earned
    */
    return(
        <div>
            <Radar
                width={120}
                data={{
                labels: props.labels,
                datasets: [{
                    label: props.player_label,
                    backgroundColor: 'rgba(255,34,57,0.6)',
                    pointRadius: 0,
                    lineTension: 0,
                    data: props.player_data
                },
                    {
                        label: props.opponent_label,
                        backgroundColor: 'rgba(0,30,255,0.6)',
                        pointRadius: 0,
                        lineTension: 0,
                        data: props.opponent_data
                    }]}}
                options={{
                    responsive: true,
                    maintainAspectRatio: true,
                    scale: {
                        ticks: {
                            display: false,
                            suggestedMin: .5,
                            suggestedMax: 3,
                        },
                        pointLabels: {
                            fontFamily: 'Quicksand',
                        },
                        gridLines: {
                        }
                    },
                    legend: {
                        display: false,
                        position: 'bottom',
                        labels: {
                            fontFamily: 'Quicksand',
                        }
                    },
                    tooltips: {
                        enabled: false,
                    },

                }}
            />
            <div style={{marginTop: 30, display:'flex', alignItems: 'center', justifyContent: 'center'}}>
                <div style={{display:'flex', alignItems: 'center'}}>
                    <div style={{height: 10, width: 10, borderRadius: '50%', backgroundColor:'rgba(255,34,57,0.6)', marginRight: 10}}/>
                    <h5 style={{fontFamily:'Quicksand'}}>{props.player_label}</h5>
                </div>
                <div style={{marginLeft:30, display: 'flex', alignItems: 'center'}}>
                    <div style={{height: 10, width: 10, borderRadius: '50%', backgroundColor:'rgba(0,30,255,0.6)', marginRight: 10}}/>
                    <h5 style={{fontFamily:'Quicksand'}}>{props.opponent_label}</h5>
                </div>
            </div>
        </div>
    )
}

export default MatchRadarChart
