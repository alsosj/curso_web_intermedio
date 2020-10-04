import React from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

function THead(props) {
    const cabeceras = props.cabecera.map((columna, index) => {
        return <TableCell key={index}>{columna}</TableCell>;
    });

    return(
        <TableHead>
            <TableRow>
                {cabeceras}
            </TableRow>
        </TableHead>
    );
} export default THead;
