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
  });

  const  occupation_means = document.getElementById('occupation_means');
  new Chart(occupation_means,{
    type: 'bar',
    data: {
      labels: s(r(occupation_data), mean(anx_data, occupation_data)),
      datasets: [{
        label: 'avg anxiety level',
        data: r(mean(anx_data, occupation_data)),
      }]
    },
  })
  
  const family_history = document.getElementById('family_history');
  new Chart(family_history,{
    type: 'bar',
    data: {
      labels: r(anx_data),
      datasets: [
        {
          label: '# reported (w. family history)',
          data: box(family_data, anx_data, 'Yes'),
      },
      {
        label: '# reported (w/o family history)',
        data: box(family_data, anx_data, 'No'),
      }
    ]
    },
    options: {
      animation: false,
      scales: {
        y: {
            suggestedMin: 0,
            suggestedMax: 1400
        }}
    },
  })