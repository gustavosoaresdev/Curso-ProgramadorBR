const users = ['Gustavo', 'Sebastian', 'Christofer', 'Amanda', 'Fernanda'];

//  OPÇÃO I
users.forEach((user, index, array) => {
    console.log(index, user, array);
});


//  OPÇÃO II
const forUsers = (user, index, array) => {
    console.log(index, user, array);
};

users.forEach(forUsers);



/* O método forEach() executa uma dada função
em cada elemento de um array. */

/* O forEach ele aceita até três parâmetros,
o primeiro vai ser o ELEMENTO, o segundo é o INDEX
e o terceiro é o ARRAY que ele está percorrendo. */

//  Os parâmetros podem ser qualquer nome que você queira botar.