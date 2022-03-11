//  PARA UM ARRAY DE NOMES
const fruits = [
    'Maça',
    'Banana',
    'Abacaxi',
    'Melancia',
    'Laranja',
];

const foundFruits = fruits.find(p => p.startsWith('M'));
console.log(foundFruits);



//  PARA UM ARRAY DE OBJETOS
const peoples = [
    { name: 'Gustavo', lastName: 'Soares' },
    { name: 'Sebastian', lastName: 'Soares' },
    { name: 'Christofer', lasName: 'Oliveira' },
    { name: 'Amanda', lastName: 'Silva' },
    { name: 'Fernanda', lastName: 'Rodriguês' },
];

const foundPeoples = peoples.find( n => n.name.startsWith('S'));
console.log(foundPeoples);



/* O método find() retorna o valor do primeiro elemento do array
que satisfizer a função de teste provida.
Caso contrario, undefined é retornado. */

/* Se por exemplo você pesquisar algo por uma letra
em um array, e tiver duas palavras com a mesma letra inicial,
ela vai aparecer apenas a primeira palavra com a letra igual. */