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
    alertDanger.classList.remove('show');

    
    if (!password1 || !password2 || !nombre || !apellido || !email) {
       return showAlertError();
    }

    if (password1 !== password2){
        showAlertError();
        return;
    }

    if (password1.lenght<6 && password2.lenght<6) {
        showAlertError();
        return;
    }
    
    if (!terminos) {
       showAlertError();
       return;
    }
      

});
