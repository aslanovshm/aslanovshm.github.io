<template>
  <canvas ref="canvas"></canvas>
</template>

<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  mounted() {
    this.createChart();
  },
  props: ['countSubscribers'],
  watch: {
    countSubscribers: function() { 
      this.createChart();
    }
  },
  methods: {
    createChart() {
      this.renderChart({
        labels: ["1 день", "2 день", "3 день", "4 день", "5 день", "6 день", "7 день",],
        datasets: [{
            borderWidth: 2,
            borderColor: "#7045C4",
            pointRadius: 4,
            pointHoverRadius: 5,
            pointBorderColor: "#7045C4",
            pointHoverBorderColor: "#7045C4",
            pointBackgroundColor: "#ffffff",
            pointHoverBackgroundColor: "#7045C4",
            backgroundColor: "rgba(142, 86, 233, 31%)",
            data: this.chartDataArr(),
          }],
        },
        {
          maintainAspectRatio: false,
          legend: {
              display: false
          },
          scales: {
            xAxes: [{
              gridLines: {
                color: "#E2E5EE",
                borderDash: [2, 5],
                zeroLineColor: "#E2E5EE",
                zeroLineWidth: 2
              },
            }],
            yAxes: [{
              gridLines: {
                display: false,
                tickMarkLength: 20,
              },
              ticks: {
                padding: 0
              }
            }]
          }
        });
    },
    chartDataArr() {
      let newArr = [];
      for (let i = 7; i > 0; i--) {
        newArr.push(Math.round(this.countSubscribers / i));
      }
      return newArr;
    }
  },
};
</script>

<style>
</style>