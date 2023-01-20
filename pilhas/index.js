const Stack = require('./stack-array');

const stack = new Stack();
console.log(stack.isEmpty()); //true
stack.push(5);
stack.push(8);
console.log(stack.peek()); //8
console.log(stack.size()); //2
console.log(stack.list());
stack.pop();
console.log(stack.list());
