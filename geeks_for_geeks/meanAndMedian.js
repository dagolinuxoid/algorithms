// mean == avg

const avg = (arr) => arr.reduce((acc,e) => acc+e,0)/arr.length;

// O(nlogn)
const median = (arr) => {
  arr=[...arr].sort((a,b) => a-b);
  return arr.length%2 ? arr[arr.length/2|0]
                      : avg([arr[arr.length/2], arr[arr.length/2-1]]);
};

const assert=require('assert').strict;
let input=[1,3,4,2,6,5,8,7];

assert.equal(avg(input),4.5);
assert.equal(median(input),4.5);

let same=[4,4,4,4];
assert.equal(avg(same),4);
assert.equal(median(same),4);

// it can be done in linear O(n) let's give it a try
