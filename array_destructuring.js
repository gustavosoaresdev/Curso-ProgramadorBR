const numbers = [2,6,3,10,32];

const [, , , num4, num5] = numbers;
console.log(num4 + num5);

const names = [
    'Gustavo', 'Sebastian',
    'Christofer', 'Amanda',
    'Fernanda',
];

const [, name2, , , name5] = names;
console.log(`${name2} + ${name5} = <3`);



//  Portuguese
/* Esse método é quase a mesma coisa que o método (object_destructuring.js),
quando você quiser juntar palavras específicas de um array,
use esse método acima. */

//  English
/* This method is almost the same as the method (object_destructuring.js),
when you want to join specific words from an array,
use this method above. */