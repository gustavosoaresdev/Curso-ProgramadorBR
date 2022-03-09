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