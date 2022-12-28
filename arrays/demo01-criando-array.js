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
daysOfWeek = new Array(
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
);

let daysOfWeek2 = []; // it's the best practice
let daysOfWeek3 = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

console.log(daysOfWeek3.length);

//Inteirar
for (let i = 0; i < daysOfWeek3.length; i++) {
  console.log(daysOfWeek3[i]);
}
