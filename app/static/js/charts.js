// helper functions
function todict(arr, anx){
  let d = [];
  for(const n in arr){
    let temp = [arr[n], anx[n]];
    d.push(temp);
  }
  return d;
}

function sorts(x){ // returns sorted array
  let arr = x.slice()
  arr.sort()
  arr.sort(function(a,b){
  return a-b;
  })
  return arr
}

function sorts2(x){ // returns sorted (by index 0) 2d array
  let arr = x.slice()
  arr.sort()
  arr.sort(function(a,b){
  return a[0]-b[0];
  })
  return arr
}

// functions
export function s(arr1, arr2){ // sorts arr1 (ex. anx) by arr2 (ex. age)
  let d = todict(arr2, arr1)
  d = sorts2(d)

  let new_dict = [];
  for (const n in d){
    const set = d[n]
    new_dict.push(set[1]);
  }
  return new_dict;
}

export function mean(arr1, arr2){ // means of arr1 (ex. anx) by arr2 (ex. age)
  let d = todict(arr2, arr1)
  d = sorts2(d)

  let counter = [d[0][1],1]
  let means = []
  for (let n=1; n<d.length; n++){
    if(d[n][0]==d[n-1][0]){
      counter[0] += d[n][1]
      counter[1] ++
    } else{
      means.push(counter[0] / counter[1]);
      counter[0] = d[n][1];
      counter[1] = 1;
      n++;
    }
  }
  means.push(counter[0] / counter[1]);
  means = means.map((x) => Math.round(x*100) / 100);

  return means;
} 

export function r(arr){ // remove extra values and sorts arr
  let a = sorts(arr)
  let d = []
  for(const n in a){
      let num = a[n]
      if (!d.includes(num)){
          d.push(num)
      }
  }
  return d
}

export function box(x, arr, filter){ // filters x (ex. family history) by filter to count arr (ex. anx)
  let d = []
  let temp = r(arr)
  for(const n in temp){
    d.push(0)
  }

  for(const n in x){
      if(x[n] == filter){
          let anxiety = arr[n]
          d[anxiety-1]++
      }
  }
  return d
}

export const opt = {
  animation: false,
}
