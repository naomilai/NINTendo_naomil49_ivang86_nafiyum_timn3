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
  
  const alcohol_means = document.getElementById('alcohol_means');
  new Chart(alcohol_means, {
    type: 'line',
    data: {
      labels: r(alcohol_data), 
      datasets: [
        {
        label: 'avg anxiety level',
        data: mean(anx_data, alcohol_data),
        }
      ],
    },
    opt: opt,
  });
  
  const phys_means = document.getElementById('phys_means');
  new Chart(phys_means, {
    type: 'line',
    data: {
      labels: r(phys_data), 
      datasets: [
        {
        label: 'avg anxiety level',
        data: mean(anx_data, phys_data),
        }
      ],
    },
    opt: opt,
  });