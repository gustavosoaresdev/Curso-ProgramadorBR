//  Só um teste básico

const myObject = {
    name: 'Gustavo',
    age: 19,
}

myObject['lastName'] = 'Soares Thomann';
myObject.favoriteColor = 'Blue';

// console.table(myObject);



const objectKeys = {
    name: 'Sebastian',
    lastName: 'Soares',
    favoriteSerie: 'Supernatural',
    cpf: '123.456.789-10',
}

console.log(Object.keys(objectKeys));

/* O comando "Object.keys" como o próprio nome já diz,
ele pega as "chaves" de um objeto. */

//  Sintaxe:  -  Object.keys(nome do objeto);