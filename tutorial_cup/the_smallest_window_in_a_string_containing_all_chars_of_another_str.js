/*
 Find the smallest window in a string containing all charactes
 of another string

 Given two strings S and T, write a function that will find the
 minimum sub string in S which will contain all the characters of T
*/

function findSubstring(str, letters) {
    const uniqueChars= new Set(letters); 

    for (let width= uniqueChars.size; width<=str.length; width++) {

        for (let i=0; i + width - 1 < str.length; i++) {
            let clone= new Set(uniqueChars.values());
            let sub= str.slice(i, i+width);        

            for (let c of sub) {
                clone.delete(c);
            }

            if (!clone.size) return sub;
        }

    }
    return `impossible`;
}

const assert= require('assert').strict;

assert.equal(findSubstring('tutorial cup','oti'),'tori');
assert.equal(findSubstring('zaaskzaa','zsk'),'skz');