import {
  s, mean, l, hist, opt, sorts
} from "./charts.js";

function r(arr){ // remove extra values
  if(arr == anx_data){
      return [1,2,3,4,5,6,7,8,9,10];
  }
  if(arr==therapy_data){
    return [1,2,3,4,5,6,7,8,9,10,11,12]
  }
  // if(arr==stress_data){
  //   return [1,2,3,4,5,6,7,8,9,10]
  // }
  var a = sorts(arr)
  var d = []
  for(const n in a){
      let num = a[n]
      if (!d.includes(num)){
          d.push(num)
      }
  }
  // console.log(d)
  return d
}
  
  // charts  
  // health
  const family_history = document.getElementById('family_history');
  new Chart(family_history,{
    type: 'bar',
    data: {
      labels: r(anx_data),
      datasets: [{
        label: '# reported',
        data: hist(family_data, anx_data, 'Yes'),
      }]
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

  const family_history2 = document.getElementById('family_history2');
  new Chart(family_history2,{
    type: 'bar',
    data: {
      labels: r(anx_data),
      datasets: [{
        label: '# reported',
        data: hist(family_data, anx_data, 'No'),
      }]
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