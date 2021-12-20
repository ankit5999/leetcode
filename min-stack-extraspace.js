// min stack implementation with extra space

// Stack class
class Stack {

    // Array is used to implement stack
    constructor() {
        this.s = [];
        this.ss = [];
    }


    // push(item)
    push(element) {
        // push element into the s stack
        this.s.push(element);
        if (this.ss.length === 0 || this.ss[this.ss.length - 1] >= element) {
            this.ss.push(element)
        }
        return element;
    }

    // pop()

    pop() {
        if (this.s.length == 0) {
            return -1
        }
        else {
            var ans = this.s[this.s.length - 1];
            this.s.pop();

            if (this.ss[this.ss.length - 1] == ans) {
                this.ss.pop()
            }
            return ans
        }
    }

    // printStack function
    printStack() {
        if (this.ss.length == 0) {
            return -1
        }
        else {
            return this.ss[this.ss.length - 1];
        }
    }
}


var stack = new Stack();
stack.push(18);
stack.push(19);
stack.push(29);
stack.push(15);
stack.pop();


console.log(stack.printStack());
