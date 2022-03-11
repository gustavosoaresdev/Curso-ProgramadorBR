const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    let peoples = [
        'Gustavo',
        'Sebastian',
        'Amanda',
        'Christofer',
        'Fernanda',
        'Julia',
        'Bruno',
    ];

    let numberOfPeoples = peoples.length;
    let drawnNumber = Math.floor(Math.random() * numberOfPeoples);

    let drawnName = document.getElementById('nome-sorteado');
    drawnName.innerHTML = peoples[drawnNumber];
});