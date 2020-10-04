import React from 'react';
import TBody from "./TBody";
import THead from "./THead"
import Table from '@material-ui/core/Table' ;

function TablaPersonal(props) {
    return (
        <Table>
            <THead columnas={props.cabecera}/>
            <TBody filas={props.filas} borrarFila={props.borrarFila}/>
        </Table>
    );
}
export default TablaPersonal;
