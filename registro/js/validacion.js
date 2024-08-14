function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

document.getElementById('regBtn').addEventListener('click', function() {
    // Obtener los valores de los campos de contraseña
    const password1 = document.getElementById('password1').value.trim();
    const password2 = document.getElementById('password2').value.trim();

    // Ocultar la alerta de éxito o error al iniciar la validación
    const alertDanger = document.getElementById('alert-danger');
    alertDanger.classList.remove('show');

    // Validar que las contraseñas coincidan
    if (password1 !== password2) {
        alertDanger.querySelector('p').textContent = 'Los datos ingresados en "Contraseña" y "Repetir contraseña" deben ser iguales.';
        alertDanger.classList.add('show');
        return;
    }

});
