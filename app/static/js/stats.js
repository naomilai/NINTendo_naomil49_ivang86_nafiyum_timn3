import {
  s, mean, r, box, opt
} from "./charts.js"; 

const sleep_means = document.getElementById('sleep_means');
new Chart(sleep_means, {
  type: 'line',
  data: {
    labels: r(sleep_data), 
    datasets: [
      {
      label: 'avg anxiety level',
      data: mean(anx_data, sleep_data),
      }
    ],
  },
  opt: opt,
});

  const  occupation_means = document.getElementById('occupation_means');
  new Chart(occupation_means,{
    type: 'bar',
    data: {
      labels: r(occupation_data),
      datasets: [{
        label: 'avg anxiety level',
        data: mean(anx_data, occupation_data),
      }]
    },
  })
  

    const therapy_means = document.getElementById('therapy_means');
    new Chart(therapy_means, {
      type: 'line',
      data: {
        labels: r(therapy_data), 
        datasets: [
          {
          label: 'avg anxiety level',
          data: mean(anx_data, therapy_data),
          }
        ],
      },
      options: {
        animation: false,
      },
    });