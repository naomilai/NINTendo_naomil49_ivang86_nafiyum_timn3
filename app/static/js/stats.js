import {
    s, mean, l, hist, opt
} from "./charts.js";

function r(arr){ // remove extra values
    if(arr == anx_data){
        return [1,2,3,4,5,6,7,8,9,10];
    }
    if(arr==therapy_data){
      return [1,2,3,4,5,6,7,8,9,10,11,12]
    }
    var a = arr.slice()
    a.sort()
    var d = []
    for(const n in a){
        let num = a[n]
        if (!d.includes(num)){
            d.push(num)
        }
    }
    return d
  }

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