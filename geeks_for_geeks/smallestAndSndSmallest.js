function getTwoSmallest(arr) {
  let fst=Infinity, snd=Infinity;
  arr.forEach(e=> e<fst ? [fst,snd]=[e,fst] : e<snd && e!==fst && (snd=e));
  return [fst, snd];
}

const assert=require('assert').strict;
assert.deepEqual(getTwoSmallest([12,13,1,10,34,1]), [1,10]);
