// CONSTANTES

const MINLENERR = "no puede estar vacio";
const USUNECARRERR = "el usuario debe tener un arroba";


//LOGICA

const formulario = document.querySelector('form');

formulario.addEventListener('submit', (form) => {

    form.preventDefault();

    const usuario = form.target[0];
    const pass = form.target[1];

    if(validarUsuario(usuario.value)){
        
        if(validarPassword(pass.value))
            formulario.submit();
    }
    
});

const validarLargo = (cadena, largo) => {

    return cadena.length >= largo;

}

const validarUsuario = (usuario) => {

    if (!validarLargo(usuario, 1)){
        alert('usuario ' + MINLENERR);
        return false;
    }

    if (usuario.indexOf('@') === -1){
        alert(USUNECARRERR);
        return false;
    }

    return true;
}

const validarPassword = (password) => {

    if (!validarLargo(password, 1)){
        alert('Clave ' + MINLENERR);
        return false;
    }

    return true;
}