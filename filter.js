const user = (name, age) => ({name, age});  //  Função  Function

const newUser = [
    user('Gustavo', 19),
    user('Sebastian', 12),
    user('Christofer', 16),
    user('Amanda', 23),
    user('Fernanda', 21),
];

const over18 = newUser.filter( age18 => age18.age >= 18);
console.log(over18);



//  Portuguese
/* O método filter() cria um novo array com todos os elementos
que passaram no teste implementado pela função fornecida. */

//  English
/* The filter() creates a new array with all elements
that has not been tested by the support function. */