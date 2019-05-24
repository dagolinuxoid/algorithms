/*
 * How to find the longest increasing subsequence
 * This problem was asked by Microsoft.

Given an array of numbers, find the length of the longest increasing
subsequence in the array.
The subsequence does not necessarily have to be contiguous.

For example, given
the array [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15],
the longest increasing subsequence has length 6: it is 0, 2, 6, 9, 11, 15.
*/

// first approach (it does work)
const lisBottomUp=(arr)=>{
  const t=arr.map(e=>1);

  arr.forEach((e,i)=> {
    for (let j=0; j<i; j++) { arr[j]<e && t[j]+1>t[i] && (t[i]=t[j]+1); }
  });

  return Math.max(0, ...t);
};

// second approach (it doesn't)
function getSequence(arr) {
  const seq=[];
  let max=0; // number of items that are greater than i-th element
  let pos=0; // index of the i-th element
  for (let i=0; i<arr.length-1; i++) {
    const len=countSup(arr.slice(i));
    if (max<len || max===len && arr[i]<arr[pos]) {
      max=len;
      pos=i;
    }
  }
  seq.push(arr[pos]);

  arr=arr.slice(pos+1);

  for (let i=0; i<arr.length; i++) {

    if (arr[i]<=seq[seq.length-1]) continue; // consider only items that strictly greater than current element

    pos=i;
    max=0;

    for (let j=i; j<arr.length; j++) {

      if (arr[j]>seq[seq.length-1]) {
        const len=countSup(arr.slice(j));

        if (max<len || max===len && arr[pos]>arr[j]) {
          max=len;
          pos=j;
        }
      }
    }

    i=pos;
    seq.push(arr[pos]);
  }
  return seq.length;
}

function countSup(arr) {
  const first=arr[0];
  return arr.filter(e=>e>first).length;
}


// the random tests show: the second approach is not always correct

const assert=require('assert').strict;

[...Array(100)].forEach((e)=>{
  e=[...Array(22)].map((_,i)=>(i+1)*Math.random()*100|0);
  console.log(e);
  assert.equal(lisBottomUp(e),getSequence(e));
});
