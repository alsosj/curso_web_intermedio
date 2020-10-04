import React from 'react';
import TBody from "./TBody";
import THead from "./THead";

function Table(props) {
    return (
        <table className="table table-striped table-bordered table-hover table-responsive-sm">
            <THead columnas={props.cabecera}/>
            <TBody filas={props.filas} borrarFila={props.borrarFila}/>
        </table>
    );
}
export default Table;
