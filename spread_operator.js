const users = ['Gustavo', 'Sebastian', 'Christofer', 'Amanda', 'Fernanda'];

const newUsers = [
    'Dorilda',
    'Artur',
    'Marcio',
    'Jéssica',
    'Maitê',
    'Gabriel',
    'Camila',
    'Marcos',
    'Marcelo',
    'Rafael',
];

const allUsers = [...users, ...newUsers];
console.log(allUsers);

const myObject = {
    name: 'Gustavo',
    age: 19,
    country: 'Brazil',
};

const serie = {
    favoriteSeries: [
        'Supernatural',
        'Prison break',
        'La casa de papel',
        'Vikings',
        'Arrow',
    ],
};

const person = {
    ...myObject,
    ...serie.favoriteSeries
};

console.log(person);


//  Portuguese
/* O array acima, se chama spread operator.
é um método que faz vários array se unir em um só array,
para fazer isso, basta apenas usar (...nome do primeiro array, ...nome do segundo array). */

//  English
/* The array above is called the spread operator.
is a method that makes several arrays merge into a single array,
to do this, just use (...first array name, ...second array name). */