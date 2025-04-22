import {
  s, mean, r, box, opt
} from "./charts.js"; 
  
  const age_means = document.getElementById('age_means');
  new Chart(age_means, {
    type: 'line',
    data: {
      labels: r(age_data), 
      datasets: [{
        label: 'avg anxiety level',
        data: mean(anx_data, age_data),
        }
      ],
    },
  });

  const gender_means = document.getElementById('gender_means');
  new Chart(gender_means,{
    type: 'bar',
    data: {
      labels: r(gender_data),
      datasets: [{
        label: 'avg anxiety level',
        data: mean(anx_data, gender_data),
      }]
    },
  })

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
  