console.log('testing chart.js')

// methods

function s(info, y){ // sorts info by y
  var d = []; 
  for (const n in info){
    arr = [y[n], info[n]];
    d.push(arr);
  }
  d.sort()
  
  var new_dict = []; 
  for (const n in d){
    const set = d[n]
    new_dict.push(set[1]);
  } 
  
  return new_dict;
}

function mean(info, arr){ // returns means of info by y
  y = arr.slice()
  y.sort()
  counter = [info[0],1]
  means = []
  for (let n=1; n<y.length; n++){
    if(n!=y.length-1 && y[n]==y[n-1]){
      counter[0] += info[n]
      counter[1] ++
    } else{
      // console.log("age:",y[n-1],"anx",info[n],counter,counter[0] / counter[1])
      means.push(counter[0] / counter[1]);
      counter[0] = info[n];
      counter[1] = 1;
      n++;
    }
  }

  means = means.map((x) => Math.round(x*10) / 10);
  return means;
}

function r(arr){ // remove extra values
  a = arr.slice()
  a.sort()
  // console.log(a)
  d = []
  for(const n in a){
      num = a[n]
      if (!d.includes(num)){
          d.push(num)
      }
  }
  // console.log(d)
  return d
}

// charts

// example chart
// const ctx = document.getElementById('myChart');
// new Chart(ctx, { // canvase element to render, options
//   type: 'bar',
//   data: {
//     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//     datasets: [{
//         label: '# of Votes',
//         data: [12, 19, 3, 5, 2, 3],
//         borderWidth: 1
//     }]
//   },
//   options: {
//   scales: {
//       y: {
//       beginAtZero: true
//       }
//   }
//   }
// });


// const c3 = document.getElementById('c3');
// new Chart(c3, {
//   type: 'bar',
//   data: {
//     labels: [5,6,7],
//     // labels: r(gender_data),
//     datasets: [{
//       label: 'anxiety level',
//       data: [1, 2, 3],
//     }]
//   }
// })

// const c2 = document.getElementById('c2')
// new Chart(c2,{
//   type: 'line',
//   data: {
//     labels: age_data,
//     // labels: age_data.slice(0,4),
//     // labels: [5,6,7,8],
//     datasets: [
//       {
//         label: 'anxiety',
//         // data: [1,2,3,4],
//         data: s(anx_data, age_data),
//       }
//     ],
//   },
// });

const c1 = document.getElementById('c3')
new Chart(c1, {
  type: 'line',
  data: {
    labels: r(age_data), 
    datasets: [
      {
      label: 'anx_data',
      data: mean(anx_data, age_data),
      }
    ],
  },
});