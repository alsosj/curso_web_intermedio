import React from 'react';
import Button from '@material-ui/core/Button'
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

function TBody(props) {
    const filas = props.filas.map((empleado, indiceFila) => {
        return (
            <TableRow key={indiceFila}>
                <TableCell>{empleado.first_name}</TableCell>
                <TableCell>{empleado.last_name}</TableCell>
                <TableCell>{empleado.birthday}</TableCell>
                <TableCell>{empleado.gender}</TableCell>
                <TableCell><img width={64} src={empleado.full_time === true ? 'ok.png' : 'ko.png'} alt={empleado.full_time === true ? 'Sí': 'No'}/></TableCell>
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
