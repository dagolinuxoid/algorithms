/*
 Find the smallest window in a string containing all charactes
 of another string

 Given two strings S and T, write a function that will find the
 minimum sub string in S which will contain all the characters of T
*/

// Brute force | actually I slightly misunderstood the task

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

// Method 2(Efficient)
// Time complesity: O(n)

function findSubstring(src, target) {
    if (src.length < target.length) return 'no such window exists' 
    [src, target] = [src, target].map(toUpperCase);
    const tarCount= Array(26).fill(0),
          srcCount= Array(26).fill(0);

    for (let c of target) {
        tarCount[c.charCodeAt()-65] += 1;
    }

    let matches= 0;
    let i= 0;
    let start= 0;
    let startIdx;
    let minLen= Infinity;

    for (let c of src) {
        const code= c.charCodeAt()-65;
        srcCount[code]++;
        if (tarCount[code] && srcCount[code]<=tarCount[code]) {
            if (startIdx===undefined) {startIdx= i;}
            matches++;
        }

        i += 1;

        if (matches===target.length) {
            minLen= i - startIdx;
            break;
        }
    }

    if (startIdx===undefinde) {
        return 'no such window exists';
    }

    return str.slice(startIdx, startIdx+minLen);
}

const assert= require('assert').strict;

assert.equal(findSubstring('tutorial cup','oti'),'tori');
assert.equal(findSubstring('zaaskzaa','zsk'),'skz');