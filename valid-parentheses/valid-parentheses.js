/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let map = {
        ")":"(",
        "]":"[",
        "}":"{"
    };

    // create a stack
    let stack = [];

    for(let i=0; i < s.length; i++){
        if(s[i] === "(" || s[i] === "[" || s[i] === "{"){
            // push into stack
            stack.push(s[i]);
        }
        else{
            if(stack[stack.length - 1] === map[s[i]]){
                // pop from stack
                stack.pop()
            }
            else return false
        }
    }

    return stack.length === 0 ? true : false
};