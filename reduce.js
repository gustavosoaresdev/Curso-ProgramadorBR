const users = [
    { name: 'Gustavo', pen: 5 },
    { name: 'Sebastian', pen: 7 },
    { name: 'Christofer', pen: 3 },
    { name: 'Amanda', pen: 11 },
    { name: 'Fernanda', pen: 9 },
];

const totalUser = (total, element) => `${total} ${element.name},`;  //  name:
console.log(users.reduce(totalUser, 'Users:'));

const totalPen = (total, element) => total + element.pen;   //  pen:
console.log(users.reduce(totalPen, 0));



//  Portuguese
/* O método reduce() executa uma função reducer (fornecida por você)
para cada elemento do array, resultando num único valor de retorno. */

//  English
/* The reduce() method executes a reducer function (provided by you)
for each element of the array, resulting in a single return value. */