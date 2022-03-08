//  function tradicional
function qualquerNome(nome){
    return 'Olá, ' + nome.toUpperCase() + '! seja bem vindo!';
}
// console.log(qualquerNome('gustavo'));



//  arrow function + bônus(${})
const qualquerNome2 = () => {
    let nome = 'Gustavo';
    let idade = 19;
    return `Olá! meu nome é ${nome} e eu tenho ${idade} anos de idade.`;
}
// console.log(qualquerNome2());



//  function anônima
window.onload = function() {
    console.log('Página completamente carregada!');
}



//  arrow function anônima
window.onload = () => {
    console.log('Eu amo programação <3');
}



//  function sem parâmetro
const bomDia = () => 'Bom dia!';



//  function com parâmetro
const boaTarde = (nome) => `Boa tarde ${nome}`;

/* Quando usamos arrow function "nomeada" e com apenas um só parâmetro,
não necessariamente precisamos usar os parênteses().
Agora se não tiver nenhum parâmetro ou se tiver mais que um,
ai sim precisamos usar os parênteses(). */



//  EXEMPLOS ABAIXO:

//  sem nenhum parâmetro - parênteses() obrigatório!
const exemplo1 = () => 'Olá, mundo!';

//  com dois parâmetros - parênteses() obrigatório!
const exemplo2 = (nome,sobrenome) => `Olá ${nome + ' ' + sobrenome}!`;

//  com apenas um parâmetro - parênteses() não obrigatório!
const exemplo3 = nome => `Olá ${nome}!`;

/* Isso signifíca que, se você tiver apenas um parâmetro, 
você pode ou não colocar parênteses().
Isso fica de sua preferência! :) */