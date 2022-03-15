const sum = (...num) => num.reduce((acc, element) => acc + element, 0);

console.log(sum(3,17,33,46,57));    //  156

const names = (...fullName) => fullName.reduce((acc, element) => `${acc} ${element},`, '');

console.log(names('Gustavo', 'Sebastian', 'Christofer', 'Amanda', 'Fernanda'));



//  Portuguese
/* Esse método acima, se chama parâmetro de descanso, em inglês (parameter rest).
esse método é muito util, ao invés de você criar vários parâmetros na função,
você cria apenas um, e você pode utilizar esse parâmetro para várias coisas...
basta você botar (...nome do parâmetro) conforme o exemplo acima. */

//  English
/* This method above is called parameter rest.
this method is very useful, instead of creating several parameters in the function,
you only create one, and you can use this parameter for several things...
just put (...parameter name) as in the example above. */