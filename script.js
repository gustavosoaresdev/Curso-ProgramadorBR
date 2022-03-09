const sum = (n1, n2) => {
    if(typeof n1 !== 'number' || typeof n2 !== 'number'){
        throw new Error('Apenas valores numéricos');
    }
    return n1 + n2;
}
// console.log(sum(2,2))
//  Essa é uma função que retorna a soma entre dois valores.
/*  E se por acausa algo der errado por exemplo:
um valor ser do tipo 'number' e o outro ser do tipo 'string', 
o comando (throw new Error) vai ser chamado. */



//  função que diz quantos dias tem o mês que escolher
const quantosDiasTemOMes = (inputNumber) => {
    switch(parseInt(inputNumber)){
        case 1:
            return 31;
        case 2:
            return 28;
        case 3:
            return 31;
        case 4:
            return 30;
        case 5:
            return 31;
        case 6:
            return 30;
        case 7:
            return 31;
        case 8:
            return 31;
        case 9:
            return 30;
        case 10:
            return 31;
        case 11:
            return 30;
        case 12:
            return 31;
        default:
            throw new Error('Mês Invalido!');
    };
};