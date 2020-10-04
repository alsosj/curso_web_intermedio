function enviarFormulario() {
    const nuevaFila = document.createElement('tr');
    const celdaNombre = document.createElement('td');
    const celdaApellidos = document.createElement('td');
    const celdaFecha = document.createElement('td');
    const celdaSexo = document.createElement('td');
    const celdaTiempoParcial = document.createElement('td');
    const celdaBorrar = document.createElement('td');

    celdaNombre.innerText = $('#campo_nombre').val();
    celdaApellidos.innerText = $('#campo_apellidos').val();
    celdaFecha.innerText = $('#campo_fecha').val();

    if ($('#campo_sexo_hombre').prop('checked')) {
        celdaSexo.innerText = 'Hombre';
    } else if ($('#campo_sexo_mujer').prop('checked')) {
        celdaSexo.innerText = 'Mujer';
    } else if ($('#campo_sexo_otro').prop('checked')) {
        celdaSexo.innerText = 'Otro';
    } else if ($('#campo_sexo_no_especificado').prop('checked')) {
        celdaSexo.innerText = 'No especificado';
    }

    const imagenTiempoParcial = document.createElement('img');
    imagenTiempoParcial.width = 32;

    if ($('#campo_tiempo_parcial').prop('checked')) {
        imagenTiempoParcial.alt = 'Sí';
        imagenTiempoParcial.src = 'ok.png';
    } else {
        imagenTiempoParcial.alt = 'No';
        imagenTiempoParcial.src = 'ko.png';
    }

    celdaTiempoParcial.appendChild(imagenTiempoParcial);

    const botonBorrar = document.createElement('button');
    botonBorrar.innerText = 'Borrar';
    botonBorrar.click(function () {
        // Código que elimina la fila
        nuevaFila.remove();
    });
    celdaBorrar.appendChild(botonBorrar);

    nuevaFila.appendChild(celdaNombre);
    nuevaFila.appendChild(celdaApellidos);
    nuevaFila.appendChild(celdaFecha);
    nuevaFila.appendChild(celdaSexo);
    nuevaFila.appendChild(celdaTiempoParcial);
    nuevaFila.appendChild(celdaBorrar);
    $('#table_body').append(nuevaFila);
}


