const nomes = [
    'Gustavo',
    'Sebastian',
    'Christofer',
    'Amanda',
    'Fernanda',
];

const nome = nomes.forEach((element, index, array) => {
    console.log(index, element, array);
});

/* O método forEach() executa uma dada função
em cada elemento de um array. */