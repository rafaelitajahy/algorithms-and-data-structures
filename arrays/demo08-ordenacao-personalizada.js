const friends = [
  { name: 'Jonh', age: 30 },
  { name: 'Ana', age: 20 },
  { name: 'Chris', age: 25 },
];

function comparePerson(a, b) {
  if (a.age < b.age) return -1;
  if (a.age > b.age) return 1;
  return 0;
}

console.log(friends.sort(comparePerson));

//Ordenando strings
let names = ['Ana', 'ana', 'jonh', 'John'];
console.log(names.sort());
console.log('A' < 'J'); //true

const ordenaLowerCase = (a, b) => {
  if (a.toLowerCase() < b.toLowerCase()) return -1;
  if (a.toLowerCase() > b.toLowerCase()) return 1;
  return 0;
};

console.log(names.sort(ordenaLowerCase));
console.log(names.sort((a, b) => a.localeCompare(b)));
