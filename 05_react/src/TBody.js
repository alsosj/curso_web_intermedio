import React from 'react';


function TBody(props) {
    const filas = props.filas.map((fila, indiceFila) => {
        return (
            <tr key={indiceFila}>
                {
                    fila.map((celda, indiceCelda) => {
                        if (typeof celda === 'boolean') {
                            return (
                                <td key={indiceCelda}>
                                    <img width={64} src={celda === true ? 'ok.png' : 'ko.png'} alt={celda === true ? 'Sí': 'No'}/>
                                </td>);
                        } else {
                            if (celda === '') {
                               return <td key={indiceCelda}><button onClick={() =>{props.borrarFila(indiceFila)}}>Borrar</button></td>;
                            } else {
                                return <td key={indiceCelda}>{celda}</td>;
                            }
                        }
                    })
                }
            </tr>
        );
    });
    return(
        <tbody id="table_body">
            {filas}
        </tbody>
    );
} export default TBody;
