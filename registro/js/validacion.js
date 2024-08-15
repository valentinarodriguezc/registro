function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

document.getElementById('regBtn').addEventListener('click', function() {
    
    const password1 = document.getElementById('password1').value.trim();
    const password2 = document.getElementById('password2').value.trim();
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const email = document.getElementById("email").value.trim();
    const terminos = document.getElementById("terminos").checked;
   
    const alertDanger = document.getElementById('alert-danger');
    const alertSuccess = document.getElementById('alert-success');
    alertDanger.classList.remove('show');
    alertSuccess.classList.remove('show');

    
    if (!password1 || !password2 || !nombre || !apellido || !email) {
       return showAlertError();
    }

    if (password1 !== password2){
        showAlertError();
        return;
    }

    if (password1.length<6 && password2.length<6) {
        showAlertError();
        return;
    }

    if (!terminos) {
       showAlertError();
       return;
    }
    showAlertSuccess(); 
});
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('input[type="password"]');
    
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            if (this.checkValidity()) {
                this.style.border = '2px solid green';
            } else {
                this.style.border = '2px solid red';
            }
        });

        input.addEventListener('blur', function() {
            if (this.checkValidity()) {
                this.style.border = '2px solid green';
            } else {
                this.style.border = '2px solid red';
            }
        });
    });
});