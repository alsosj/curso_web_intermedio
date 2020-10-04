import React from 'react';
import Button from '@material-ui/core/Button'
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

function TBody(props) {
    const filas = props.filas.map((fila, indiceFila) => {
        return (
            <TableRow key={indiceFila}>
                <TableCell>{fila.nombre}</TableCell>
                <TableCell>{fila.apellidos}</TableCell>
                <TableCell>{fila.fecha !== null ? fila.fecha.toLocaleDateString('en-GB') : ''}</TableCell>
                <TableCell>{fila.sexo}</TableCell>
                <TableCell><img width={64} src={fila.tiempo_parcial === true ? 'ok.png' : 'ko.png'} alt={fila.tiempo_parcial === true ? 'Sí': 'No'}/></TableCell>
                <TableCell><Button variant="contained" color="secondary" onClick={() =>{props.borrarFila(indiceFila)}}>Borrar</Button></TableCell>
            </TableRow>
        );
    });
    return(
        <TableBody id="table_body">
            {filas}
        </TableBody>
    );
} export default TBody;
