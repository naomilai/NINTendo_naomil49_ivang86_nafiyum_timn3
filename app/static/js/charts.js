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

function mean(x, arr){ // returns means of x by y
  y = arr.slice().sort()
  info = s(x.slice(), arr)
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

  means = means.map((x) => Math.round(x*100) / 100);
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

// styling
options = {
  animation: false,
}

// charts
// demographics
// age
const age_all = document.getElementById('age_all');
new Chart(age_all,{
  type: 'line',
  data: {
    labels: age_data,
    labels: age_data.toSorted(),
    datasets: [
      {
        label: 'anxiety level',
        data: anx_data,
        data: s(anx_data, age_data),
      }
    ],
  },
  options: {
    animation: false,
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
  options: {
    animation: false,
  },
});
// gender
const gender_means = document.getElementById('gender_means');
new Chart(gender_means,{
  type: 'bar',
  data: {
    labels: r(gender_data),
    datasets: [{
      label: 'anxiety level',
      data: mean(anx_data, gender_data),
    }]
  },
  options: {
    animation: false,
  },
})
// occupation
const  occupation_means = document.getElementById('occupation_means');
new Chart(occupation_means,{
  type: 'bar',
  data: {
    labels: r(occupation_data),
    datasets: [{
      label: 'anxiety level',
      data: mean(anx_data, occupation_data),
    }]
  },
  options: {
    animation: false,
  },
})

// health
const family_history = document.getElementById('family_history');
new Chart(family_history,{
  type: 'bar',
  data: {
    labels: family_data,
    datasets: [{
      label: 'anxiety level',
      data: anx_data,
    }]
  },
  options: {
    animation: false,
  },
})
