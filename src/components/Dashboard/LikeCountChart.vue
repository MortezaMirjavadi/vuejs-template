<script>
    import {Bar} from 'vue-chartjs'

    export default {
        extends: Bar,
        props: {
            dataLabels: Array,
            dataValues: Array
        },
        data: function () {
            return {
                datacollection: {
                    labels: this.dataLabels,
                    datasets: [
                        {
                            label: 'Data One',
                            backgroundColor: '#f87979',
                            pointBackgroundColor: 'white',
                            borderWidth: 1,
                            pointBorderColor: '#249EBF',
                            data: this.dataValues
                        }
                    ]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            },
                            gridLines: {
                                display: true
                            }
                        }],
                        xAxes: [{
                            ticks: {
                                beginAtZero: true
                            },
                            gridLines: {
                                display: false
                            }
                        }]
                    },
                    legend: {
                        display: false
                    },
                    tooltips: {
                        enabled: true,
                        mode: 'single',
                        callbacks: {
                            label: function (tooltipItems, data) {
                                return  tooltipItems.yLabel;
                            }
                        }
                    },
                    responsive: true,
                    maintainAspectRatio: false,
                    height: 200
                }
            }
        },

        mounted() {
            this.renderChart(this.datacollection, this.options)
        }
    }
</script>
