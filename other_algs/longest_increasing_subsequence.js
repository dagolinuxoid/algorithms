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

function getSequence(arr) {
  const seq=[];
  let max=0;
  let pos=0;
  for (let i=0; i<arr.length-1; i++) {
    const sub=arr.slice(i+1);
    const len=sub.filter(e=>e>=arr[i]).length;
    if (max<len || max===len && arr[i]<arr[pos]) {
      max=len;
      pos=i;
    }
  }
  seq.push(arr[pos]);

  arr=arr.slice(pos+1);

  for (let i=0; i<arr.length; i++) {

    if (arr[i]<seq[seq.length-1]) continue;

    pos=i;
    max=0;

    for (let j=i; j<arr.length; j++) {

      if (arr[j]>=seq[seq.length-1]) {
        const len=countAbove(arr.slice(j));

        if (max<len || max===len && arr[pos]>arr[j]) {
          max=len;
          pos=j;
        }
      }
    }

    i=pos;
    seq.push(arr[pos]);
  }
  console.log(seq);
  return seq.length;
}

function countAbove(arr) {
  let first=arr[0];
  return arr.slice(1).filter(e=>e>=first).length;
}

const assert=require('assert').strict;
assert.equal(getSequence([0,8,4,12,2,10,6,14,1,9,5,13,3,11,7,15]),[0,2,6,9,11,15].length);
assert.equal(getSequence([1,5,4,8,42]),4);
assert.equal(getSequence([8,5,7,8,2]),3);
assert.equal(getSequence([8,5,1,8,2]),2);
assert.equal(getSequence([7,2,1,3,8,4,9,1,2,6,5,9,3,8,1]),5);

