// Destructuring
let person = {name:'James', age:25, job:'Programmer'};

const {name, age} = person;
console.log(name, age);

person = {name, age, job:'Traveller'};
console.log(person);

let fruits = ['apple', 'banana', 'cherry'];
const [a, b, c] = fruits;          // apple banana cherry
console.log(a, b, c);
const [ , x, y] = fruits           // banana cherry
console.log(x, y);        

// Rest Operator
const [l, ...m] = fruits;          // apple [ 'banana', 'cherry' ]
console.log(l, m);

let newFruits = [...fruits, 'melon']; 
console.log(newFruits);           // [ 'apple', 'banana', 'cherry', 'melon' ]
console.log([fruits, 'melon']);   // [ [ 'apple', 'banana', 'cherry' ], 'melon' ]

let str = 'JAVA';
console.log(...str);    // J A V A

let newPerson = {...person, gender:'male'};
console.log(newPerson);