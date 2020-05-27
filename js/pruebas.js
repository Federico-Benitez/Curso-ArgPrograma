function probarValidarNombre() {
    console.assert(
        validarNombre('') === 'El nombre debe tener al menos 1 caracter',
        'Validar nombre no validó que el nombre no sea vacío',
    );

    console.assert(
        validarNombre(
            '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
        'El nombre debe tener menos de 50 caracteres',
        'Validar nombre no validó que el nombre sea menor a 50 caracteres',
    );

    console.assert(validarNombre("Fede31")==='El nombre solo puede contener letras',
    'Validar nombre no valido que el nombre no contenga números');

    console.assert(validarNombre("Federico")==='',
    'Validar nombre falló con un nombre valido');
}

function probarCiudad(){
    console.assert(validarCiudad('Chaco')==='',
    'Validar ciudad falló con una ciudad valida');

    console.assert(validarCiudad('') === 'Debe elegir una ciudad', 
    'Validar ciudad no validó que la ciudad haya sido elegida',);
}

function probarDescripcion(){
    console.assert(validarDescripcionRegalo('')==='Debe escribir la descripcion del regalo',
    'Validar Descripción no valido que la descripción haya sida escrita',);

    console.assert(validarDescripcionRegalo('11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111')==='El campo descripción es muy largo',
    'Validar Descripción fallo con una descripción que era de longitud mayor a 100 caracteres');

    console.assert(validarDescripcionRegalo('Quiero una notebook')==='',
    'Validar Descripción fallo con una descripción valida');

    console.assert(validarDescripcionRegalo('.,_-')==='El campo descripcion solo  puede tener numeros y letras',
    'Validar Descripcion no valido que fueran solo sean letras y numeros')
}


probarValidarNombre();
probarCiudad();
probarDescripcion();
