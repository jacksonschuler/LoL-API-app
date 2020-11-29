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
            <Radar data={{
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
                    scale: {
                        ticks: {
                            display: false,
                            suggestedMin: 1,
                            suggestedMax: 3.2,
                        },
                        pointLabels: {
                            fontFamily: 'Quicksand',
                        },
                        gridLines: {
                        }
                    },
                    legend: {
                        position: 'left',
                        labels: {
                            fontFamily: 'Quicksand',
                        }
                    },
                    tooltips: {
                        enabled: false,
                    },

                }}
            />
        </div>
    )
}

export default MatchRadarChart
