const lowerCaseAlphabet = [
    'q', 'w', 'e', 'r', 't',
    'y', 'u', 'i', 'o', 'p',
    'a', 's', 'd', 'f', 'g',
    'h', 'j', 'k', 'l', 'ç',
    'z', 'x', 'c', 'v', 'b',
    'n', 'm',
];

const capitalAlphabet = [
    'Q', 'W', 'E', 'R', 'T',
    'Y', 'U', 'I', 'O', 'P',
    'A', 'S', 'D', 'F', 'G',
    'H', 'J', 'K', 'L', 'Ç',
    'Z', 'X', 'C', 'V', 'B',
    'N', 'M',
];

const allTogether = [
    'Q', 'w', 'E', 'r', 'T',
    'Y', 'U', 'i', 'O', 'p',
    'a', 'S', 'D', 'F', 'G',
    'h', 'j', 'K', 'L', 'Ç',
    'Z', 'X', 'c', 'V', 'B',
    'n', 'M',
];

console.log(lowerCaseAlphabet.sort());
console.log(capitalAlphabet.sort());
console.log(allTogether.sort());



const array = [
    'q', 'w', 'e', 'r', 't',
    'y', 'u', 'i', 'o', 'p',
    'a', 's', 'd', 'f', 'g',
    'h', 'j', 'k', 'l', 'ç',
    'z', 'x', 'c', 'v', 'b',
    'n', 'm',

    'Q', 'W', 'E', 'R', 'T',
    'Y', 'U', 'I', 'O', 'P',
    'A', 'S', 'D', 'F', 'G',
    'H', 'J', 'K', 'L', 'Ç',
    'Z', 'X', 'C', 'V', 'B',
    'N', 'M',
];

const newArray = array.sort((a, b) => {
    return a.toLowerCase() > b.toLowerCase() ? 1 : -1;
});

console.log(newArray);

const array2 = [
    'q', 'w', 'e', 'r', 't',
    'y', 'u', 'i', 'o', 'p',
    'a', 's', 'd', 'f', 'g',
    'h', 'j', 'k', 'l', 'ç',
    'z', 'x', 'c', 'v', 'b',
    'n', 'm',

    'Q', 'W', 'E', 'R', 'T',
    'Y', 'U', 'I', 'O', 'P',
    'A', 'S', 'D', 'F', 'G',
    'H', 'J', 'K', 'L', 'Ç',
    'Z', 'X', 'C', 'V', 'B',
    'N', 'M',
];

const newArray2 = array2.sort((a, b) => {
    if(a.toLowerCase() > b.toLowerCase())
        return 1;

    else if(b.toLowerCase() > a.toLowerCase())
        return -1;

    return 0;
});

console.log(newArray2);



const numbers = [5,3,1,2,4];
console.log(numbers.sort());

const names = [
    'Gustavo',
    'Sebastian',
    'Christofer',
    'Amanda',
    'Fernanda',
];

console.log(names.sort());

//  Só alguns exemplos de como da pra usar o sort().

/* O método sort() ordena os elementos do próprio array e retorna
o array. A ordenação não é necessariamente estável.
A ordenação padrão é de acordo com a  pontuação de código unicode.

A complexidade do tempo de execução ou a quantidade de memória
utilizada pela ordenação não pode ser garantido e depende
da implementação realizada. */