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



const objectValues = {
    name: 'Matheus',
    lasName: 'Vieira',
    favoriteColor: 'Green',
    cpf: '098.765.432-10',
}

console.log(Object.values(objectValues));

/* O comando "Object.values" é a quase a mesma coisa que o "Object.keys",
só que ao invés de pegar as chaves, ele pega os "valores" de um objeto. */

//  Sintaxe:  -  Object.values(nome do objeto);