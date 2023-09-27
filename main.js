document.addEventListener('DOMContentLoaded', function () {
    const loginBtn = document.getElementById('loginBtn');
    const registroBtn = document.getElementById('registroBtn');
    const apellidoField = document.getElementById('apellido');
    const numeroField = document.getElementById('numero');
    const correoField = document.getElementById('correo');

    loginBtn.addEventListener('click', function () {
       
        apellidoField.style.display = 'none';
        numeroField.style.display = 'none';
        correoField.style.display = 'none';
    });

    registroBtn.addEventListener('click', function () {
       
        apellidoField.style.display = 'block';
        numeroField.style.display = 'block';
        correoField.style.display = 'block';
    });
});