/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    var targetno = []
    var output = [];
    var j = 0;
    for(let i=1; i<=n; i++){
        if(targetno.length == target.length){
            break
        }
        else{
            output.push("Push");
            if(i == target[j]){
                targetno.push(i)
                j++;
            }
            else if(target[j] === undefined){
                break;
            }
            else{
                output.push("Pop")
            }
        }
    }
    
    return output
};