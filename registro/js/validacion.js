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
    const terminos = document.getElementById("terminos");
   
    const alertDanger = document.getElementById('alert-danger');
    alertDanger.classList.remove('show');

    
    if (!password1 || !password2 || !nombre || !apellido || !email || !terminos || password1 !== password2) {
       return showAlertError();
    }else{
       return showAlertSuccess();
    }
    
});
