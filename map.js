const numbers = [2,4,17,22,35];
const doubleNumber = numbers.map(num => num * 2);

// console.log(doubleNumber);



const fahrenheit = [0, 32, 35, 45, 50, 80, 120];

//  Opção mais moderna
const celsiusModerno = fahrenheit.map(element => Math.round((element - 32) * 5/9));
console.log(celsiusModerno);

//  Opção mais antiga
const celsiusRaiz = fahrenheit.map((element) => {
    return Math.round((element - 32) * 5/9);
});
console.log(celsiusRaiz);



//  Portuguese
/* O método map() invoca a função callback passada por argumento
para cada elemento do Array e devolve um novo Array como resultado. */

//  English
/* The map() method invokes a callback function passed by argument
for each element of the Array and returns a new Array as a result. */