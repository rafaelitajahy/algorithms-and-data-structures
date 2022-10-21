//Array 
//  estrutura de dados - mais simples
//  armazena valores do mesmo tipo
//  javascript permite armazenar valores de tipos diferentes

const avarageTemp = [];
avarageTemp[0] = 31.9;
avarageTemp[1] = 35.8;
avarageTemp[2] = 37;

// Criando e inivializando arrays

let daysOfWeek = new Array(); // it's not the best practice
daysOfWeek = new Array(7);
daysOfWeek = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');

let daysOfWeek2 = []; // it's the best practice
let daysOfWeek3 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

console.log(daysOfWeek3.length);

for (let i = 0; i < daysOfWeek3.length; i++) {
  console.log(daysOfWeek3[i]);
}

//fibonacci
const fibonacci = [];
fibonacci[1] = 1;
fibonacci[2] = 2;
for (let i = 3; i < 20; i++){
  fibonacci[i] = fibonacci[i -1] + fibonacci[i -2];
}
for (let i = 1; i < fibonacci.length; i++){
  console.log(fibonacci);
}

//Manipulando elementos
let numbers = [0,1,2,3,4,5,6,7,8,9];

// add final
numbers[numbers.length] = 10;
numbers.push(11);
numbers.push(12,13);

// add inicio
Array.prototype.insetFirstPosition = function(value) {
  for(let i = this.length; i>=0; i--){
    this[i] = this[i -1];
  }
  this[0] = value;
};
numbers.insetFirstPosition(-1);

numbers.unshift(-2);
numbers.unshift(-3,-4);
console.log(numbers);

// removendo final
numbers.pop();

//removendo inicio
for(let i=0; i<numbers.length; i++){
  numbers[i] = numbers[i + 1];
}

console.log(numbers);