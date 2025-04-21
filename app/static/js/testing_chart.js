// testing chart.js!!

console.log('this is javascript!');

const ctx = document.getElementById('myChart');

new Chart(ctx, { // canvase element to render, options
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1
      }]
    },
    options: {
    scales: {
        y: {
        beginAtZero: true
        }
    }
    }
});

const d_age = document.getElementById('line_chart');

new Chart(d_age, {
  type: 'line',
  data: {
    labels: // x-enhanced_anxiety_dataset
    data: // y-axis
  }
})
