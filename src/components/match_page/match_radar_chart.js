import React from 'react';
import {Radar} from 'react-chartjs-2'

function MatchRadarChart(){


    return(
        <div>
            <Radar data={{
                labels: ['Running', 'Swimming', 'Eating', 'Cycling', 'Dying', 'LOL'],
                datasets: [{
                    label: 'schulerj',
                    backgroundColor: 'rgba(255,33,94,0.6)',
                    pointRadius: 0,
                    lineTension: 0,
                    data: [20, 10, 29, 14, 25, 20]
                },
                    {
                        label: 'Another Gamer',
                        backgroundColor: 'rgba(0,30,255,0.6)',
                        pointRadius: 0,
                        lineTension: 0,
                        data: [29, 15, 20, 19, 22, 25]
                    }]}}
                options={{
                    scale: {
                        ticks: {
                            display: false,
                            beginAtZero: true,
                            suggestedMax: 30,
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
