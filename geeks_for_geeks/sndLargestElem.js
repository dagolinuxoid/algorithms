// Find second largest element in an array
// about 2 times more efficient version
function getSndMaxElem(arr) {
  let max=-Infinity, sndMax=-Infinity, oldMax;
  for (let i=0; i<arr.length; i++) {
    oldMax=max;

    if (arr[i]>max) { max=arr[i]; }

    if (oldMax<max) { sndMax=oldMax; }
    else if (arr[i]<max&&arr[i]>sndMax) { sndMax=arr[i]; }
  }
  return sndMax;
  // or return isFinite(sndMax) ? sndMax : false (null) or 'does not exist';
}

function slow(arr) {
  let max=Math.max(...arr),
      sndMax=-Infinity;
  arr.forEach(e=> e>sndMax && e<max && (sndMax=e));
  return sndMax;
}

// both functions have O(n) though
const assert=require('assert').strict;
for (let i=0; i<100; i++) {
  let arr=[...Array(20)].map((_,i)=>i*Math.random()*100|0);
  console.log(arr);
  assert.equal(getSndMaxElem(arr), slow(arr));
}
