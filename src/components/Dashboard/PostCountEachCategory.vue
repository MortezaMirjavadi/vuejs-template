<script>

    import {Pie} from "vue-chartjs";

    export default {
        extends: Pie,

        props: {
            dataLabels: Array,
            dataValues: Array
        },

        mounted() {
            this.renderChart({
                labels: this.dataLabels,
                datasets: [
                    {
                        backgroundColor: [
                            '#41B883',
                            '#E46651',
                            '#00D8FF',
                            '#DD1B16'
                        ],
                        data: this.dataValues
                    }
                ]
            }, {
                responsive: true,
                maintainAspectRatio: false,
                pieceLabel: {
                    mode: 'percentage',
                    precision: 1
                }
            })
        }

    }

</script>
