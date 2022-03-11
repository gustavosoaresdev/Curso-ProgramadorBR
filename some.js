const numbers = [1,3,2,5];

const numberEven = numbers.some((n) => n % 2 === 0);
console.log(numberEven);

const names = [
    'Gustavo',
    'Sebastian',
    'Christofer',
    'Amanda',
    'Fernanda',
];

const verifyName = names.some((n) => n === 'Howbertt');
console.log(verifyName);



const team = [
    { id: 23, name: 'Howbertt', isPilot: true, },
    { id: 44, name: 'Pongo', isPilot: false, },
    { id: 17, name: 'Sebastian', isPilot: false, },
    { id: 34, name: 'Albin', isPilot: true, },
    { id: 52, name: 'Tesla', isPilot: true, },
];

console.log(team.some((pilot => pilot.isPilot)));



/* O método some() testa se ao menos um dos elementos
no array passa no teste implementado pela função atribuída
e retorna um valor true ou false. */