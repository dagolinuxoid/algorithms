/*
How to Solve the Anagram Indices Problem
May 20, 2018

Given a word and a string S,
find all starting indices in S which are anagrams of word.

For example, given that word is “ab”, and S is “abxaba”,
return 0, 3, and 4.
*/

function anagramIndices(w,s){
  w=w.toUpperCase(), s=s.toUpperCase();
  const indices=[];

  const wf=Array(26).fill(0);
  const sf=Array(26).fill(0);
  for (let char of w) wf[char.charCodeAt()-65]++;

  const wLen=w.length;
  const swf=''+wf;

  let subSf=s.slice(0,wLen);
  for (let char of subSf) sf[char.charCodeAt()-65]++;

  if (swf===''+sf) indices[0]=0;

  let fst=s[0];
  for (let i=1; i<=s.length-wLen; i++) {
    sf[fst.charCodeAt()-65]--;
    sf[s[i+wLen-1].charCodeAt()-65]++;
    fst=s[i];
    if (swf===''+sf) indices.push(i);
  }
  return indices;
}