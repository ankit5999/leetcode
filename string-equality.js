// 𝐐) 𝐂𝐚𝐧 𝐲𝐨𝐮 𝐰𝐫𝐢𝐭𝐞 𝐚 𝐟𝐮𝐧𝐜𝐭𝐢𝐨𝐧 𝐭𝐡𝐚𝐭 𝐰𝐢𝐥𝐥 𝐜𝐡𝐞𝐜𝐤 𝐢𝐟 𝐭𝐡𝐞 𝐬𝐲𝐦𝐛𝐨𝐥 𝐩𝐚𝐢𝐫𝐢𝐧𝐠𝐬 𝐢𝐧 𝐭𝐡𝐞 𝐬𝐭𝐫𝐢𝐧𝐠 𝐟𝐨𝐥𝐥𝐨𝐰 𝐭𝐡𝐞𝐬𝐞 𝐛𝐞𝐥𝐨𝐰 𝐜𝐨𝐧𝐝𝐢𝐭𝐢𝐨𝐧𝐬?

// 1. They are correctly ordered, meaning opening braces/symbols should come first.
// 2. They contain the correct pairings, so every opening brace has a closing one.
// 3. They are both of the same kind in a pair, so an opening parenthesis does not close with a closing curly brace.

// 𝐅𝐨𝐫 𝐞𝐱𝐚𝐦𝐩𝐥𝐞, () is valid. (( is not. Similarly, {{[]}} is valid. [[}} is not.

// 𝑪𝒐𝒏𝒔𝒕𝒓𝒂𝒊𝒏𝒕𝒔:
// Length of the string <= 100000
// The string will only consist of characters like [,],{,},(,)
// Expected time and space complexity: O(n)



// Solution:

// {([])} // true : ([) // false

function isequal(str){
    // Logic

    let map = {
        ")":"(",
        "]":"[",
        "}":"{",
    };

    // creating stack
    let stack = [];

    for(let i=0; i < str.length; i++){
        if(str[i] === "(" || str[i] === "[" || str[i] === "{"){
            // push into stack
            stack.push(str[i]);
        }
        else{
            if(stack[stack.length - 1] === map[str[i]]){
                // pop from stack
                stack.pop()
            }
            else return false
        }
    }

    return stack.length === 0 ? true : false
}

console.log(isequal("{([])}"));


// Output: true
