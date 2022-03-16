const objectPerson = {
    name: 'Gustavo',
    age: 19,
    note: 8.5,
    phone: 123456789,
};

//  Esse modo abaixo, ele copia apenas o nome(name) e a nota(note) do objectPerson
const {name, note} = objectPerson;
console.log(`O aluno ${name} tirou a média: ${note}`);

console.log('');

//  Esse modo abaixo, ele copia todos os elementos do objectPerson
const {...copy} = objectPerson;
console.log(copy);

/* Aqui eu estou removendo a idade(age) e a nota(note) do objectPerson,
e mandando imprimir o que restou do objectPerson */
const {age, note: note2, ...rest} = objectPerson;
console.log(rest);



//  Portuguese
/* Esse método é bastante util, caso você queira copiar apenas alguns
elementos de um objeto, use: const {propriedado do objeto} = nome do objeto a ser copiado;
se ficou na dúvida, olhe o exemplo acima. */

//  English
/* This method is very useful if you only want to copy a few
elements of an object, use: const {object property} = name of the object to be copied;
If in doubt, look at the example above. */