// min stack implementation with O(1) space


// Stack class
class Stack {

    // Array is used to implement stack
    constructor() {
        this.s = [];
        this.minelement = -1
    }


    // push(item)
    push(element) {
        // push element into the s stack
        if (this.s.length === 0) {
            this.s.push(element);
            this.minelement = element;
        }
        else{
            if(element >= this.minelement){
                this.s.push(element);
            }
            else if(element < this.minelement){
                this.s.push(2*element-this.minelement);
                this.minelement = element;
            }
        }
    }

    // pop()
    pop() {
        if (this.s.length == 0) {
            return -1
        }
        else {
            if(this.s[this.s.length-1] >= this.minelement){
                this.s.pop();
            }
            // flag condition
            else if(this.s[this.s.length-1] < this.minelement){
                this.minelement = 2*this.minelement-this.s[this.s.length-1];
                this.s.pop();
            }
        }
    }

    //top()
    top(){
        if(this.s.length-1 === 0){
            return -1
        }
        else{
            if(this.s[this.s.length-1] >= this.minelement){
                return this.s[this.s.length-1];
            }
            else if(this.s[this.s.length-1] < this.minelement){
                return this.minelement;
            }
        }
    }

    // printStack function
    printStack() {
        if (this.s.length == 0) {
            return -1
        }
        else {
            return this.minelement;
        }
    }
}


var stack = new Stack();
stack.push(18);
stack.push(19);
stack.push(29);
stack.push(15);
stack.top();
stack.pop();


console.log(stack.printStack());
