import {
  s, mean, r, l, hist, opt
} from "./charts.js";

  // charts
  // age
  const age_all = document.getElementById('age_all');
  new Chart(age_all,{
    type: 'line',
    data: {
      labels: age_data.toSorted(),
      datasets: [
        {
          label: 'anxiety level',
          data: s(anx_data, age_data),
        }
      ],
    },
  });
  
  const age_means = document.getElementById('age_means');
  new Chart(age_means, {
    type: 'line',
    data: {
      labels: r(age_data), 
      datasets: [
        {
        label: 'avg anxiety level',
        data: mean(anx_data, age_data),
        }
      ],
    },
  });
  // gender
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
    options: options
  })
  // occupation
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
  