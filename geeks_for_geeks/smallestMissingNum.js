// O(n) traverse the whole array
const smallestMissingNum = (arr) => {
  for (let i=0,smallest=0; i<arr.length; i++,smallest++) {
    if (smallest!==arr[i]) return smallest;
  }

  return arr[arr.length-1]+1;
};

// binary Search O(logn)
const solve = (arr) => {
  let l=0, r=arr.length-1;
  let lastValidElem=-1;
  while (l<r) {
    m=Math.floor((l+r)/2);
    if (m===arr[m]) { // left part has no adjacent elements with diff > 1
      lastValidElem=m;
      l=m+1;
    } else { // m<arr[m]; left part has elements that a[i]+1!==a[i+1]
      r=m-1;
    }
  }
  // since at this moment l===r pick any of them
  if (arr[r]===lastValidElem+1) lastValidElem++;

  return lastValidElem+1;
};

// some manual basic testing
let input=[0,1,2,6,9];
let input1=[4,5,8,12];
console.log(solve(input));
console.log(solve(input1));

const assert=require('assert').strict;

assert.equal(smallestMissingNum([0,1,2,6,9]),3);
assert.equal(smallestMissingNum([4,5,10,11]),0);
assert.equal(smallestMissingNum([0,1,2,3]),4);
assert.equal(smallestMissingNum([0,1,2,3,4,5,6,7,10]),8);

assert.equal(solve([0,1,2,6,9]),3);
assert.equal(solve([4,5,10,11]),0);
assert.equal(solve([0,1,2,3]),4);
assert.equal(solve([0,1,2,3,4,5,6,7,10]),8);

// a little bit more reliable tests

for (let i=0; i<100; i++) {
  let arr=[...Array(5)].map((_,i)=>(i+1)*Math.random()*10|0).sort((a,b)=>a-b);
  arr=[...new Set(arr)];
  console.log(arr);
  assert.equal(smallestMissingNum(arr),solve(arr));
}
