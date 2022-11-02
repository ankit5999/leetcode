/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let i = 0;
    let j = 0;
    let status = 0;
    while(i < s.length){
        while(j < t.length){
            if(s[i] === t[j]) {status = 1; j++; break;}
            else j++;
        }
        if(status === 0) return false;
        else {i++; status = 0;}
    }
    return true;
};