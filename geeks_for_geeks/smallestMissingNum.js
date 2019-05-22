// O(n) traverse the whole array
const smallestMissingNum = (arr) => {
  let smallest=0;
  for (let i=0; i<arr.length; i++,smallest++) {
    if (smallest<arr[i]) return smallest;
  }
  return arr[arr.length]+1;
};

// binary Search O(logn)
const solve = (arr) => {

};


const assert=require('assert').strict;

assert.equal(smallestMissingNum([0,1,2,6,9]),3);
assert.equal(smallestMissingNum([4,5,10,11]),0);
assert.equal(smallestMissingNum([0,1,2,3]),4);
assert.equal(smallestMissingNum([0,1,2,3,4,5,6,7,10]),8);
