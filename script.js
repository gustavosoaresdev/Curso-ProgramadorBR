//  Exercício FizzBuzz
//  Divisivel por 3 => Fizz
//  Divisivel por 5 => Buzz
//  Divisivel por 3 e 5 => FizzBuzz
//  Não divisivel por 3 e 5 => valor entrada
//  Não é um número => não é um número
const fizzBuzz = (entrada) => {
    if(typeof entrada !== 'number')
        return 'Não é um número';
    if(entrada % 3 === 0 && entrada % 5 === 0)
        return 'FizzBuzz';
    if(entrada % 3 === 0)
        return 'Fizz';
    if(entrada % 5 === 0)
        return 'Buzz';
    return entrada;
};

console.log(fizzBuzz(30)); 
console.log(fizzBuzz(15)); 