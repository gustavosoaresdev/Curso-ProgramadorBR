const numbers = [1,5,2,9,4];

const greaterThanOrEqualTo5 = numbers.every(n => n >= 5);
console.log(greaterThanOrEqualTo5);



const peoplesAge = [
    { name: 'Gustavo', age: 19, },
    { name: 'Sebastian', age: 12, },
    { name: 'Christofer', age: 16, },
    { name: 'Amanda', age: 17, },
    { name: 'Fernanda', age: 21, },
];

const ageOver18 = peoplesAge.every(age => age.age >= 18);
console.log(ageOver18);



/* O método every() testa se todos os elementos do array
passam pelo teste implementado pela função fornecida. */