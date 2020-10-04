$(document).ready(
    function () {
        // Se espera a que esté cargado
        // Buscamos por id
        const contenedor = document.getElementById('contenedor');
        console.log(contenedor);

        // Buscamos por tag
        const ps = document.getElementsByTagName('p');
        console.log(ps);

        // Buscamos por clase

        const reds = document.getElementsByClassName('red');
        console.log(reds);

        ps[0].innerText = 'Cambio de texto';
        ps[1].innerHTML = 'Lo de contenido <b>HTML</b>';

        // Cambiamos el enlace

        const enlace = document.getElementById('enlace');
        enlace.innerText = 'Enlace a Yahoo';

        // Tres formas válidas de cambiar el atributo href

        enlace.href = 'http://www.yahoo.com';
        enlace['href'] = 'http://www.yahoo.com';
        enlace.setAttribute('href', 'http://www.yahoo.com');

        // Creamos un tercer párrafo

        const nuevoParrafo = document.createElement('p');
        nuevoParrafo.innerText = 'Añadido extra.';
        contenedor.appendChild(nuevoParrafo);

        // Eventos

        $('p').on({
            click: function() { $(this).css('background-color', 'red')},
            mouseenter: function() { $(this).css('background-color', 'lightblue')},
            mouseleave: function() { $(this).css('background-color', 'orange')},
        });
    }
);
