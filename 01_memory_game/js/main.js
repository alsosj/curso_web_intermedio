
let tablero = [
    ['bowser', 'luigi', 'mario', 'rosalina', 'bowser', 'yoshi'],
    ['rosalina', 'wario', 'peach', 'wario', 'toad', 'diddy'],
    ['mario', 'toad', 'yoshi', 'luigi', 'diddy', 'peach']
];

let parejaActual = [];
let emparejadas = [];
let bloqueado = false;

function clickedCell(elem) {
    if (bloqueado || emparejadas.includes(elem) || parejaActual.includes(elem)) {
        return;
    }

    const row = elem.id.split(',')[0];
    const col = elem.id.split(',')[1];

    const character = tablero[row][col];

    elem.src = `img/${character}.png`;

    parejaActual.push(elem);

    console.log(parejaActual);

    if (parejaActual.length === 2) {
        if (parejaActual[0].src === parejaActual[1].src) {
            // Éxito
            parejaActual.forEach(function (e) {
                emparejadas.push(e);
            });
            parejaActual = [];

        } else {
            bloqueado = true;
            setTimeout(function() {
                parejaActual.forEach(function (e) {
                    e.src = './img/sky.png';
                });
                parejaActual = [];
                bloqueado = false;
            }, 1000);
        }
    }
}

function refreshPage() {
    parejaActual = [];
    emparejadas = [];
    $('img').attr('src', './img/sky.png');
}
