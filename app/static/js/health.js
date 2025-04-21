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
    if(arr == anx_data){
        console.log('anx');
        return [1,2,3,4,5,6,7,8,9,10];
    }
    if(arr == therapy_data){
        return [1,2,3,4,5,6,7,8,9,10,11,12]
    }
    a = arr.slice()
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

  function hist(x, arr, filter){ // x: family history, arr: anxiety level, filter: yes/no
    d = [0,0,0,0,0,0,0,0,0,0]
    for(const n in x){
        if(x[n] == filter){
            anxiety = arr[n]
            d[anxiety-1]++
        }
    }
    console.log(d)
    return d
  }
  
  // styling
  options = {
    animation: false,
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
      labels: therapy_data,
      labels: therapy_data.toSorted(),
      datasets: [
        {
          label: 'anxiety level',
          data: anx_data,
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