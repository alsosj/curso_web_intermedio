import React from 'react';
import TBody from "./TBody";
import THead from "./THead";

function Table(props) {
    return (
        <table>
            <THead columnas={props.cabecera}/>
            <TBody filas={props.filas} borrarFila={props.borrarFila}/>
        </table>
    );
}
export default Table;
