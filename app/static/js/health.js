import {
  s, mean, r, box, opt
} from "./charts.js"; 
  
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
      scales: {
        y: {
            suggestedMin: 0,
            suggestedMax: 10
        }}
    },
  });

  const stress_means = document.getElementById('stress_means');
  new Chart(stress_means, {
    type: 'line',
    data: {
      labels: r(stress_data), 
      datasets: [
        {
        label: 'avg anxiety level',
        data: mean(anx_data, stress_data),
        }
      ],
    },
    options: {
      animation: false,
    },
  });