function createButton (text, callback) {
    const body = document.querySelector('body');
    const button = document.createElement('button');
    button.textContent = text;

    callback(button);

    body.appendChild(button);

    return button;
};

createButton('Login', (button) => {

});

createButton('Sign up', (button) => {
    
});