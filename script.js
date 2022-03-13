function createButton (text, callback) {
    const body = document.querySelector('body');
    const button = document.createElement('button');
    button.textContent = text;

    callback(button);

    body.appendChild(button);
};