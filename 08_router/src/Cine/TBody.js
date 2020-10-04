import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

function TBody(props) {
    const filas = props.filas.map((fila, indiceFila) => {
        return (
            <TableRow key={indiceFila} onClick={() => {props.onClickedMovie(fila.imdbID)}}>
                <TableCell>{fila.Title}</TableCell>
                <TableCell>{fila.Year}</TableCell>
                <TableCell><img width={128} src={fila.Poster} alt=''/></TableCell>
            </TableRow>
        );
    });
    return(
        <TableBody id="table_body">
            {filas}
        </TableBody>
    );
} export default TBody;
