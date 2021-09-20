document.querySelector('#btningreso').addEventListener('click', inicioSesion);

function inicioSesion(){
    var sUser = '';
    var sContrasena = '';
    var bAcceso = false;

    sUser = document.querySelector('#user').value;
    sContrasena = document.querySelector('#password').value;

    bAcceso = validarCredenciales(sUser,sContrasena);
    console.log(bAcceso);

    if (bAcceso==true) {
        ingresar();
    }
}


function validarCredenciales(puser, pcontrasena){
    var bAcceso = false;
    if (puser == 'admin' && pcontrasena== '12345') {
        bAcceso = true;
    }
    return bAcceso
}


function ingresar(){
    window.location.href = 'admin.html';
}
