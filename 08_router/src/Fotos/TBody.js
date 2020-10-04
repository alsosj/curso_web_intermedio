import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

function TBody(props) {
    const filas = props.filas.map((fila, indiceFila) => {
        return (
            <TableRow key={indiceFila}>
                <TableCell>{fila.albumId}</TableCell>
                <TableCell>{fila.id}</TableCell>
                <TableCell>{fila.title}</TableCell>
                <TableCell><img width={64} src={fila.thumbnailUrl} alt=''/></TableCell>
            </TableRow>
        );
    });
    return(
        <TableBody id="table_body">
            {filas}
        </TableBody>
    );
} export default TBody;
