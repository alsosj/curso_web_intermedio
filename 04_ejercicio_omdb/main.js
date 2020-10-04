$(document).ready(() => {
})

const api_key = ''; // Poned vuestra API KEY, obtenida de OMDb

function obtenerPelicula(id) {
    $("#tabla_resultados").hide();

    // Lanzo la petición
    const request = new XMLHttpRequest();
    request.open('GET', 'http://www.omdbapi.com/?apikey=' + api_key + '&i=' + id);
    request.send();

    request.onreadystatechange = (e) => {
        if (request.readyState === 4) {
            console.log('Mostrar grid');
            $("#grid_ficha").show();
            const pelicula = JSON.parse(request.responseText);
            console.log(pelicula);
            $('#titulo').text(pelicula.Title);
            $('#puntuacion').text(pelicula.Ratings[0].Value);
            $('#poster').attr('src', pelicula.Poster);
            $('#director').text(pelicula.Director);
            $('#genero').text(pelicula.Genre);
            $('#actores').text(pelicula.Actors);
            $('#sinopsis').text(pelicula.Plot);
        }
    };
}

function buscar() {

    // Vaciamos la tabla
    $('#table_body').empty();

    // Extraer el término de búsqueda
    const query = document.getElementById('input_busqueda').value;
    // const query_con_jquery = $('#input_busqueda').val();

    // Lanzo la petición
    const request = new XMLHttpRequest();
    request.open('GET', 'http://www.omdbapi.com/?apikey=' + api_key + '&s=' + query);
    request.send();

    request.onreadystatechange = (e) => {
        if (request.readyState === 4) {
            $("#tabla_resultados").show();
            const resultados = JSON.parse(request.responseText);
            console.log(resultados);
            resultados.Search.forEach((resultado) => {
                const filaNueva = document.createElement('tr');

                const celdaTitulo = document.createElement('td');
                const celdaAnio = document.createElement('td');
                const celdaImagen = document.createElement('td');

                celdaTitulo.innerText = resultado.Title;
                celdaAnio.innerText = resultado.Year;

                const imgThumbnail = document.createElement('img');
                imgThumbnail.src = resultado.Poster;
                imgThumbnail.alt = 'ND';
                imgThumbnail.height = 200;

                celdaImagen.appendChild(imgThumbnail);
                filaNueva.appendChild(celdaTitulo);
                filaNueva.appendChild(celdaAnio);
                filaNueva.appendChild(celdaImagen);
                filaNueva.onclick = () => {obtenerPelicula(resultado.imdbID)};  // sin jQuery
                //$(filaNueva).click(() => {obtenerPelicula(resultado.imdbID)});  // con jQuery
                document.getElementById('table_body').appendChild(filaNueva);
            });
        }
    };
    return false;
}
