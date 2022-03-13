function createButton (text, callback) {
    const body = document.querySelector('body');
    const button = document.createElement('button');
    button.textContent = text;

    callback(button);

    body.appendChild(button);

    return button;
};

createButton('Login', (button) => {
    button.style.cssText = `
        background-color: blue;
        color: #fff;
        font-weight: bold;
        padding: 10px 20px;
        border-radius: 30px;
        border: 1px solid #000;
        font-size: 18px;
        text-shadow: 1px 1px 3px #000;
        cursor: pointer;
    `;

    button.addEventListener('click', () => {
        alert('Botão de (Login) foi clicado!');
    });

});

createButton('Sign up', (button) => {
    button.style.cssText = `
        margin-left: 10px;
        background-color: red;
        color: #fff;
        font-weight: bold;
        padding: 10px 20px;
        border-radius: 30px;
        border: 1px solid #000;
        font-size: 18px;
        text-shadow: 1px 1px 3px #000;
        cursor: pointer;
    `;

    button.addEventListener('click', () => {
        alert('Botão de (Sign up) foi clicado!');
    });

});



/* Pode criar quantos botões você quiser, basta você chamar a função (createButton)
e dentro dos parênteses você da o nome que você quiser para o botão, e depois
você cria uma função, no caso essa função vai ser o "Callback"... */

//  Exemplos tudo acima