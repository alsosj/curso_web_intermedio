function enviarFormulario() {
    const nuevaFila = document.createElement('tr');
    const celdaNombre = document.createElement('td');
    const celdaApellidos = document.createElement('td');
    const celdaFecha = document.createElement('td');
    const celdaSexo = document.createElement('td');
    const celdaTiempoParcial = document.createElement('td');
    const celdaBorrar = document.createElement('td');

    celdaNombre.innerText = document.getElementById('campo_nombre').value;
    celdaApellidos.innerText = document.getElementById('campo_apellidos').value;
    celdaFecha.innerText = document.getElementById('campo_fecha').value;

    if (document.getElementById('campo_sexo_hombre').checked) {
        celdaSexo.innerText = 'Hombre';
    } else if (document.getElementById('campo_sexo_mujer').checked) {
        celdaSexo.innerText = 'Mujer';
    } else if (document.getElementById('campo_sexo_otro').checked) {
        celdaSexo.innerText = 'Otro';
    } else if (document.getElementById('campo_sexo_no_especificado').checked) {
        celdaSexo.innerText = 'No especificado';
    }

    const imagenTiempoParcial = document.createElement('img');
    imagenTiempoParcial.width = 32;

    if (document.getElementById('campo_tiempo_parcial').checked) {
        imagenTiempoParcial.alt = 'Sí';
        imagenTiempoParcial.src = 'ok.png';
    } else {
        imagenTiempoParcial.alt = 'No';
        imagenTiempoParcial.src = 'ko.png';
    }

    celdaTiempoParcial.appendChild(imagenTiempoParcial);

    const botonBorrar = document.createElement('button');
    botonBorrar.innerText = 'Borrar';
    botonBorrar.onclick = function () {
        // Código que elimine la fila
        nuevaFila.remove();
    };

    celdaBorrar.appendChild(botonBorrar);

    nuevaFila.appendChild(celdaNombre);
    nuevaFila.appendChild(celdaApellidos);
    nuevaFila.appendChild(celdaFecha);
    nuevaFila.appendChild(celdaSexo);
    nuevaFila.appendChild(celdaTiempoParcial);
    nuevaFila.appendChild(celdaBorrar);
    document.getElementById('table_body').appendChild(nuevaFila);
}


