import React from 'react';


function TBody(props) {
    const filas = props.filas.map((fila, indiceFila) => {
        return (
            <tr key={indiceFila}>
                <td>{fila.albumId}</td>
                <td>{fila.id}</td>
                <td>{fila.title}</td>
                <td><img src={fila.thumbnailUrl} alt={fila.id}/></td>
            </tr>
        );
    });
    return(
        <tbody id="table_body">
            {filas}
        </tbody>
    );
} export default TBody;
