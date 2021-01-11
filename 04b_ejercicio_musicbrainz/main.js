const api_root = 'https://musicbrainz.org/ws/2/';

$(document).ready(() => {
})

function obtenerArtista(mbid) {
    $("#tabla_resultados").hide();
    // Lanzo la petición

    $.get(`${api_root}artist/${mbid}?fmt=json&inc=release-groups`, (r) => {
        console.log(r);
    $("#grid_ficha_artista").show();
    $("#tabla_artista").show();
    $('#nombre_artista').text(r.name);
    $('#pais_artista').text(r.area.name);

    const filtered = r['release-groups'].filter(rg => rg['primary-type'] === 'Album');

    filtered.forEach((rg) => {
        const filaNueva = document.createElement('tr');
        const celdaTitulo = document.createElement('td');
        const celdaLanzamiento = document.createElement('td');
        const celdaThumbnail = document.createElement('td');

        celdaTitulo.innerText = rg.title;
        celdaLanzamiento.innerText = rg['first-release-date'];

        $.get(`http://coverartarchive.org/release-group/${rg.id}`, (coverResponse) => {
            const imgThumbnail = document.createElement('img');
            imgThumbnail.width = 100;
            celdaThumbnail.appendChild(imgThumbnail);

            if (coverResponse.images.length > 0) {
                imgThumbnail.src = coverResponse.images[0].image;
            } else {
                imgThumbnail.src = "";
            }
        });

        filaNueva.appendChild(celdaTitulo);
        filaNueva.appendChild(celdaLanzamiento);
        filaNueva.appendChild(celdaThumbnail);

        document.getElementById('artist_table_body').appendChild(filaNueva);
    });
});

}

function obtenerReleaseGroup(mbid) {
    $("#tabla_resultados").hide();
    // Lanzo la petición

    $.get(`http://coverartarchive.org/release-group/${mbid}`, (coverResponse) => {
        if (coverResponse.images.length > 0) {
            document.getElementById('caratula_release_group').src = coverResponse.images[0].image;
        } else {
            document.getElementById('caratula_release_group').src = "";
        }
    });

    $.get(`${api_root}release-group/${mbid}?fmt=json&inc=releases`, (r) => {
        $("#grid_ficha_release_group").show();
        $("#tabla_release_group").show();
        $('#titulo_release_group').text(r.title);
        $('#lanzamiento_release_group').text(r['first-release-date']);

        const releaseId = r.releases[0].id;

        /*$.get(`${api_root}release/${releaseId}?fmt=json`, (releaseResponse) => {
            console.log(releaseResponse);
            //document.getElementById('caratula_release_group').src = coverResponse.images[0].image;
        });*/


        //const filtered = r['release-groups'].filter(rg => rg['primary-type'] === 'Album');

        /*filtered.forEach((rg) => {
            const filaNueva = document.createElement('tr');
            const celdaTitulo = document.createElement('td');
            const celdaLanzamiento = document.createElement('td');
            const celdaThumbnail = document.createElement('td');

            celdaTitulo.innerText = rg.title;
            celdaLanzamiento.innerText = rg['first-release-date'];


            filaNueva.appendChild(celdaTitulo);
            filaNueva.appendChild(celdaLanzamiento);
            filaNueva.appendChild(celdaThumbnail);

            document.getElementById('artist_table_body').appendChild(filaNueva);
        });*/
    });
}

function getResults(entity, query, offset) {
    // Vaciamos la tabla
    $('#table_body').empty();
    $('#headers_row').empty();
    $('#btnParent').empty();

    $.get(`${api_root}${entity}?query=${query}&offset=${offset}&fmt=json`, (r) => {
        console.log(r);
        const count = r.count;
        const r_offset = r.offset;
        const headers_row = document.getElementById('headers_row');

        $("#tabla_resultados").show();

        if (entity === 'artist') {

            const thName = document.createElement('th')
            const thDisambiguation = document.createElement('th')

            headers_row.appendChild(thName);
            headers_row.appendChild(thDisambiguation);

            thName.innerText = 'Nombre';
            thDisambiguation.innerText = 'Más info';

            r.artists.sort((a, b) => {
                return b.score - a.score;
            });

            r.artists.forEach((resultado) => {
                const filaNueva = document.createElement('tr');
                const celdaName = document.createElement('td');
                const celdaDisambiguation = document.createElement('td');

                celdaName.innerText = resultado.name;

                celdaDisambiguation.innerText = resultado.disambiguation !== undefined ? resultado.disambiguation : '';

                filaNueva.appendChild(celdaName);
                filaNueva.appendChild(celdaDisambiguation);
                filaNueva.onclick = () => {
                    obtenerArtista(resultado.id);
                };

                document.getElementById('table_body').appendChild(filaNueva);

            });
        } else if (entity === 'release-group') {

            const thTitle = document.createElement('th')
            const thArtist = document.createElement('th')
            const thType = document.createElement('th')

            thTitle.innerText = 'Título';
            thArtist.innerText = 'Artista';
            thType.innerText = 'Tipo';

            headers_row.appendChild(thTitle);
            headers_row.appendChild(thArtist);
            headers_row.appendChild(thType);

            r['release-groups'].sort((a, b) => {
                return b.score - a.score;
            });

            r['release-groups'].forEach((resultado) => {
                const filaNueva = document.createElement('tr');
                const celdaTitle = document.createElement('td');
                const celdaArtist = document.createElement('td');
                const celtaType = document.createElement('td');

                celdaTitle.innerText = resultado.title;
                celdaArtist.innerText = resultado['artist-credit'][0].artist.name;
                celtaType.innerText = resultado['primary-type'];

                filaNueva.appendChild(celdaTitle);
                filaNueva.appendChild(celdaArtist);
                filaNueva.appendChild(celtaType);

                filaNueva.onclick = () => {
                    obtenerReleaseGroup(resultado.id);
                };


                document.getElementById('table_body').appendChild(filaNueva);

            });
        }

        if (count > 25) {
            const btnParent = document.getElementById('btnParent');
            if (r_offset > 0) {
                // Genero los botones de "anterior" y "primera"
                let btnFirst = document.createElement('button');
                btnFirst.onclick = () => {
                    getResults(entity, query, 0)
                }
                btnFirst.setAttribute('class', 'btn btn-info')

                let btnPrev = document.createElement('button');
                btnPrev.onclick = () => {
                    getResults(entity, query, offset - 25)
                }
                btnPrev.setAttribute('class', 'btn btn-info')

                btnFirst.innerText = '<<';
                btnPrev.innerText = '<';
                btnParent.appendChild(btnFirst);
                btnParent.appendChild(btnPrev);
            }

            if (offset < count - (count % 25)) {
                // Genero los botones de "siguiente" y "última"
                let btnNext = document.createElement('button');
                btnNext.setAttribute('class', 'btn btn-info')
                btnNext.onclick = () => {
                    getResults(entity, query, offset + 25)
                }
                let btnLast = document.createElement('button');
                btnLast.setAttribute('class', 'btn btn-info')
                btnLast.onclick = () => {
                    getResults(entity, query, count - (count % 25))
                }
                btnNext.innerText = '>';
                btnLast.innerText = '>>';
                btnParent.appendChild(btnNext);
                btnParent.appendChild(btnLast);

            }
        }
    });
}

function buscar() {
    // Extraemos el término de búsqueda
    const query = encodeURIComponent(document.getElementById('input_busqueda').value);

    const entity = document.getElementById('entity_selection').value;
    const offset = 0;
    // Lanzo la petición

    getResults(entity, query, offset);
    return false;
}
