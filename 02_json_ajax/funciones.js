// Construir

const request = new XMLHttpRequest();
request.open('GET', 'https://jsonplaceholder.typicode.com/photos');
request.send();

request.onreadystatechange = (e) => {
    if (request.readyState === 4) {
        const fotos = JSON.parse(request.responseText);

        fotos.forEach((foto) => {
            const filaNueva = document.createElement('tr');

            const celdaIdAlbum = document.createElement('td');
            const celdaIdFoto = document.createElement('td');
            const celdaTitulo = document.createElement('td');
            const celdaImagen = document.createElement('td');

            celdaIdAlbum.innerText = foto.albumId;
            celdaIdFoto.innerText = foto.id;
            celdaTitulo.innerText = foto.title;

            const imgThumbnail = document.createElement('img');
            imgThumbnail.src = foto.thumbnailUrl;
            imgThumbnail.alt = foto.id;

            celdaImagen.appendChild(imgThumbnail);
            filaNueva.appendChild(celdaIdAlbum);
            filaNueva.appendChild(celdaIdFoto);
            filaNueva.appendChild(celdaTitulo);
            filaNueva.appendChild(celdaImagen);
            document.getElementById('table_body').appendChild(filaNueva);
        });
    }
};
