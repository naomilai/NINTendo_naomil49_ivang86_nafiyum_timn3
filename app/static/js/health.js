import {
  s, mean, l, hist, options
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
  
  const medication = document.getElementById('medication');
  new Chart(medication,{
    type: 'bar',
    data: {
      labels: r(anx_data),
      datasets: [{
        label: '# reported',
        data: hist(medication_data, anx_data, 'Yes'),
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

  const medication2 = document.getElementById('medication2');
  new Chart(medication2,{
    type: 'bar',
    data: {
      labels: r(anx_data),
      datasets: [{
        label: '# reported',
        data: hist(medication_data, anx_data, 'No'),
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

  
  const therapy_all = document.getElementById('therapy_all');
  new Chart(therapy_all,{
    type: 'line',
    data: {
      labels: therapy_data.toSorted(),
      datasets: [
        {
          label: 'anxiety level',
          data: s(anx_data, therapy_data),
        }
      ],
    },
    options: {
      animation: false,
    },
  });
  
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