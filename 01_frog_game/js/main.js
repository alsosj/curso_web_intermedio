function checkPosition(pos) {
    if (pos < 0 || pos > 6) {
        return false;
    }
    const target = document.getElementById(pos);
    return target.name === 'B';
}

function swap(from, to) {
    const fromImg = document.getElementById(from);
    const toImg = document.getElementById(to);

    // Intercambio los valores relevantes
    const tempSrc = fromImg.src;
    const tempName = fromImg.name;

    fromImg.src = toImg.src;
    fromImg.name = toImg.name;

    toImg.src = tempSrc;
    toImg.name = tempName;
}

function clickedCell(elem) {
    const tipo = elem.name;
    const pos = parseInt(elem.id, 10);

    if (tipo === 'B') {
        return;
    }

    //let positionToCheck = tipo === 'R' ? pos + 1 : pos - 1;
    const offset = tipo === 'R' ? 1 : - 1;
    let positionToCheck = pos + offset;

    if (checkPosition(positionToCheck)) {
        swap(pos, positionToCheck);
    } else if (checkPosition(positionToCheck + offset)) {
        swap(pos, positionToCheck + offset);
    }
}