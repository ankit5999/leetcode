// min stack implementation with extra space


var s = [];
var ss = [];

function push(a){
    s.push(a);
    if(ss.length === 0 || ss[ss.length-1] >= a){
        ss.push(a)
    }
    return a;
}

function pop(){
    if(s.length == 0){
        return -1
    }
    else{
        var ans = s[s.length-1];
        s.pop();

        if(ss[ss.length-1] == ans){
            ss.pop()
        }
        return ans
    }
}

function getmin(){
    if(ss.length == 0){
        return -1
    }
    else{
        return ss[ss.length-1];
    }
}

const ans = push(18)
console.log(ans);