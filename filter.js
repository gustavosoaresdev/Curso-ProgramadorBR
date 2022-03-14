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