
function validarNombre(nombre) {
    if (nombre.length === 0) {
        return "El nombre debe tener al menos 1 caracter";
    }
    if (nombre.length >= 50) {
        return "El nombre debe tener menos de 50 caracteres";
    }
    //comprobar que  solo tenga letras
    if (/[0-9]+/.test(nombre)) {
        return 'El nombre solo puede contener letras'
    }

    return '';
}
//validar Ciudad
function validarCiudad(ciudad){
    if(ciudad === ''){
        return 'Debe elegir una ciudad';
    }
    return '';
}
//validar descripcion regalo
function validarDescripcionRegalo(descripcion){
    if(descripcion.length  >= 100){
        return 'El campo descripción es muy largo';
    }
    if(descripcion===''){
        return 'Debe escribir la descripcion del regalo';
    }
    if (!/^[a-z0-9 ]+$/i.test(descripcion)) { //ingresar letras  numeros y espacios
        return 'El campo descripcion solo  puede tener numeros y letras';
    }
    return '';
}


function validarFormulario(event){
    event.preventDefault();
    const $form = document.querySelector("#carta-a-santa");
    const $errores = document.querySelector("#errores");

    const nombre = $form.nombre.value;
    const ciudad = $form.ciudad.value;       
    const descripcionRegalo = $form["descripcion-regalo"].value;

    const errorNombre = validarNombre(nombre);
    const errorCiudad = validarCiudad(ciudad);    
    const errorDescripcion = validarDescripcionRegalo(descripcionRegalo);

    const errores = {
        nombre: errorNombre,
        ciudad: errorCiudad,
        'descripcion-regalo': errorDescripcion,
    };

    eliminarErroresPrevios($errores);
    const esExito = manejarErrores(errores) === 0;

    if (esExito) { // 5 segundos y redireccionar a ./whishlist.html
        document.querySelector("#exito").className = '';
        document.querySelector('#carta-a-santa').className= 'oculto';
        redirigir();
    }    
}

function redirigir(){    
    setTimeout(function() {window.location.href = './wishlist.html'}, 5000);
    return false;
}

function eliminarErroresPrevios(errores){
    let lis  = document.querySelector("#errores");
    lis.innerHTML= '';
}

function manejarErrores(errores){
    const keys = Object.keys(errores);
    const $errores = document.querySelector('#errores');
    let cantidadErrores = 0 ;

    keys.forEach(function(key){
        const error = errores[key];        
        if (error) {
            cantidadErrores++;
            $form[key].className = "error";
            const $error = document.createElement('li');
            $error.innerText = error;
            $errores.appendChild($error);
        }else{                      
            $form[key].className = "";
        }
    });
    return cantidadErrores;    
}

const $form = document.querySelector('#carta-a-santa');
$form.onsubmit = validarFormulario;