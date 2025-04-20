console.log('charts.js')

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

function mean(info, y){ // returns means of info by y
  y.sort()
  counter = [info[0],1]
  means = []
  for (let n=1; n<y.length; n++){
    if(n!=y.length-1 && y[n]==y[n-1]){
      counter[0] += info[n]
      counter[1] ++
    } else{
      console.log("age:",y[n-1],"anx",info[n],counter,counter[0] / counter[1])
      means.push(counter[0] / counter[1]);
      counter[0] = info[n];
      counter[1] = 1;
      n++;
    }
  }

  means = means.map((x) => Math.round(x*10) / 10);
  console.log(means);
  return means;
}

function r (a){ // remove extra values
  a.sort()
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

// demographics
// age
const age_all = document.getElementById('age_all');
new Chart(age_all,{
  type: 'line',
  data: {
    labels: age_data,
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
      label: 'anxiety level',
      data: mean(anx_data, age_data),
      }
    ],
  },
});

// const gender_all = document.getElementById('gender_all');
// new Chart(gender_all,{
//   type: 'line',
//   data: {
//     labels: gender_data,
//     datasets: [
//       {
//         label: 'anxiety level',
//         data: s(anx_data, gender_data),
//       }
//     ],
//   },
// });

