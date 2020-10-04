import React from 'react';
import TablaPersonal from "./TablaPersonal";
import Form from './Form';
import axios from 'axios';

class ListaEmpleados extends React.Component {
    state = {
        cabecera: ['Nombre', 'Apellidos', 'Fecha de nacimiento', 'Sexo', 'Tiempo parcial', 'Salario', 'Borrar'],
        datos: [
            //{nombre: 'Alfonso', apellidos: 'Izquierdo', fecha: '27/11/1971', sexo: 'Hombre', tiempo_parcial: true},
            //{nombre: 'Macarena', apellidos: 'Díez', fecha: '28/3/1993', sexo: 'Mujer', tiempo_parcial: false},
        ]
    }

    componentDidMount() {
        axios.get('/api/employee/').then((r) => {
            this.setState({datos: r.data})
        }).catch((e) => {
            // console.log(e);
        });
    }

    render() {
        return (
            <div>
                <TablaPersonal cabecera={this.state.cabecera} filas={this.state.datos} borrarFila={this.borrarFila}/>
                <Form guardar={this.anadirEmpleado}/>
            </div>
        );
    }

    borrarFila = (indiceBorrar) => {
        axios.delete(`/api/employee/${indiceBorrar}/`).then((r) => {

            // Como el servidor me devuelve el nuevo estado, lo guardo
            this.setState({datos: r.data});
        }).catch((e) => {
            // console.log(e);
        });
    };

    anadirEmpleado = (nuevoEmpleado) => {
        axios.post('/api/employee/', nuevoEmpleado).then((r) => {
            this.setState({datos: [...this.state.datos, r.data]});
        }).catch((e) => {
           // console.log(e);
        });
    }
}

export default ListaEmpleados;
