import {
    s, mean, r, l, hist, opt
} from "./charts.js";
  
  // charts  
  const sleep_all = document.getElementById('sleep_all');
  new Chart(sleep_all,{
    type: 'line',
    data: {
      labels: l(anx_data, sleep_data),
      datasets: [
        {
          label: 'anxiety level',
          data: s(anx_data, sleep_data),
        }
      ],
    },
    opt: opt,
  });
  
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

  const alcohol_all = document.getElementById('alcohol_all');
  new Chart(alcohol_all,{
    type: 'line',
    data: {
      labels: l(anx_data, alcohol_data),
      datasets: [
        {
          label: 'anxiety level',
          data: s(anx_data, alcohol_data),
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

  const caffeine_all = document.getElementById('caffeine_all');
  new Chart(caffeine_all,{
    type: 'line',
    data: {
      labels: caffeine_data.toSorted(),
      datasets: [
        {
          label: 'anxiety level',
          data: s(anx_data, caffeine_data),
        }
      ],
    },
    opt: opt,
  });
  
  const caffeine_means = document.getElementById('caffeine_means');
  new Chart(caffeine_means, {
    type: 'line',
    data: {
      labels: r(caffeine_data), 
      datasets: [
        {
        label: 'avg anxiety level',
        data: mean(anx_data, caffeine_data),
        }
      ],
    },
    opt: opt,
  });