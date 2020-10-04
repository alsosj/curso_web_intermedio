import React from 'react';
import Button from '@material-ui/core/Button'
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const prettifyDate = (o) => {
    // Convertimos la fecha a DD-MM-AAAA
    const options = {
        year: "numeric",
        month: "2-digit",
        day: "numeric"
    };

    return new Date(o).toLocaleString('en-GB', options);
};

const prettifyGender = (g) => {
    if (g === 'ne') {
        return 'No especificado';
    } else {
        // Generamos un string con la primera letra en mayúscula para el resto de casos
        return g.charAt(0).toUpperCase() + g.slice(1);
    }
};

function TBody(props) {
    const filas = props.filas.map((empleado, indiceFila) => {
        return (
            <TableRow key={indiceFila}>
                <TableCell>{empleado.first_name}</TableCell>
                <TableCell>{empleado.last_name}</TableCell>
                <TableCell>{prettifyDate(empleado.birthday)}</TableCell>
                <TableCell>{prettifyGender(empleado.gender)}</TableCell>
                <TableCell><img width={64} src={empleado.full_time === true ? 'static/ok.png' : 'static/ko.png'} alt={empleado.full_time === true ? 'Sí': 'No'}/></TableCell>
                <TableCell>{empleado.salario}</TableCell>
                <TableCell><Button variant="contained" color="secondary" onClick={() =>{props.borrarFila(empleado.pk)}}>Borrar</Button></TableCell>
            </TableRow>
        );
    });
    return(
        <TableBody id="table_body">
            {filas}
        </TableBody>
    );
} export default TBody;
