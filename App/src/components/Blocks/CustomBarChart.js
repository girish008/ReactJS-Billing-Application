import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';



export default class CustomBarChart extends Component {

    render() {
        const { statistics_data } = this.props;
        var chartData = {
            labels: statistics_data.months,
            datasets: [
                {
                    label: 'Unpaid',
                    backgroundColor: 'rgba(240, 58, 58, 1)',
                    borderColor: 'rgba(240, 58, 58, 1)',
                    data: statistics_data.unpaid
                },
                {
                    label: 'Sent',
                    backgroundColor: 'rgba(240, 181, 58, 1)',
                    borderColor: 'rgba(240, 181, 58, 1)',
                    data: statistics_data.sent
                },
                {
                    label: 'Paid',
                    backgroundColor: 'rgba(76, 175, 120, 1)',
                    borderColor: 'rgba(76, 175, 120, 1)',
                    data: statistics_data.paid
                }
            ]
        };

        return (

            <div className="custom-chart-block">
                <Bar
                    data={chartData}
                    width={100}
                    height={50}
                    options={{
                        maintainAspectRatio: false,
                        legend: {
                            display: true,
                            position: 'bottom'
                        },
                        scales: {
                            xAxes: [{
                                barPercentage: 2,
                                barThickness: 18,
                                maxBarThickness: 18
                            }],
                            yAxes: [{
                                scaleLabel: {
                                    display: true,
                                    labelString: '%'
                                },
                                ticks: {
                                    max: 100
                                }
                            }]
                        }
                    }}
                />
            </div>
        );
    }
}