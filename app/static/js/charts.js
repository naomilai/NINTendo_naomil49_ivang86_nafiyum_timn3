// methods
<<<<<<< HEAD
export function s(info, y){ // sorts info by y
  var d = []; 
=======
function s(info, y){ // sorts info by y
  var d = [];
>>>>>>> 407ceb848e1f573ea44f4327c1d98e2441c4f68d
  for (const n in info){
    let arr = [y[n], info[n]];
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

export function mean(x, arr){ // returns means of x by y
  var y = arr.slice().sort()
  var info = s(x.slice(), arr)
  var counter = [info[0],1]
  var means = []
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

  means = means.map((x) => Math.round(x*100) / 100);
  return means;
}

export function r(arr){ // remove extra values
  if(arr == anx_data){
      return [1,2,3,4,5,6,7,8,9,10];
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

export function hist(x, arr, filter){ // x: family history, arr: anxiety level, filter: yes/no
  var d = [0,0,0,0,0,0,0,0,0,0]
  for(const n in x){
      if(x[n] == filter){
          let anxiety = arr[n]
          d[anxiety-1]++
      }
  }
  // console.log(d)
  return d
}

export function l(info, y){
  var d = []; 
  for (const n in info){
    let  arr = [y[n], info[n]];
    d.push(arr);
  }
  d.sort()
  
  var new_dict = []; 
  for (const n in d){
    const set = d[n]
    new_dict.push(set[0]);
  } 
  
  return new_dict;
}

<<<<<<< HEAD
export const opt = {
  animation: false,
}
=======

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
>>>>>>> 407ceb848e1f573ea44f4327c1d98e2441c4f68d
