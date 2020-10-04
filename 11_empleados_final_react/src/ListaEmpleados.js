import React from 'react';
import TablaPersonal from "./TablaPersonal";
import Form from './Form';
import axios from 'axios';

class ListaEmpleados extends React.Component {
    state = {
        cabecera: ['Nombre', 'Apellidos', 'Fecha de nacimiento', 'Sexo', 'Tiempo parcial', 'Borrar'],
        datos: [
            //{nombre: 'Alfonso', apellidos: 'Izquierdo', fecha: '27/11/1971', sexo: 'Hombre', tiempo_parcial: true},
            //{nombre: 'Macarena', apellidos: 'Díez', fecha: '28/3/1993', sexo: 'Mujer', tiempo_parcial: false},
        ]
    }

    componentDidMount() {
        axios.get('http://localhost:8000/api/employee/').then((r) => {
            this.setState({datos: r.data})
        }).catch((e) => {
            console.log(e);
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

    /*
    función map => [1, 2, 3, 4] => ['uno', 'dos', 'tres', 'cuatro'] (le especifico la función de transformación)
    función filter => [1, 2, 3, 4] => [1, 3] (le especifico la función de filtrado)
    */

    borrarFila = (indiceBorrar) => {
        axios.delete(`http://localhost:8000/api/employee/${indiceBorrar}/`).then((r) => {
            // Si el servidor no me da el estado nuevo, lo intento predecir
            /*const nuevasFilas = this.state.datos.filter((empleado, index) => {
                return empleado.pk !== indiceBorrar;
            });
            this.setState({datos: nuevasFilas});
             */
            
            // Si el servidor me devuelve el nuevo estado, lo guardo
            this.setState({datos: r.data});
        }).catch((e) => {
            console.log(e);
        });
    };

    anadirEmpleado = (nuevoEmpleado) => {
        // Forma tradicional
        /*const nuevosDatos = this.state.datos;
        nuevosDatos.push(nuevoEmpleado);
        this.setState({datos: nuevosDatos});*/

        axios.post('http://localhost:8000/api/employee/', nuevoEmpleado).then((r) => {
            this.setState({datos: [...this.state.datos, r.data]});
        }).catch((e) => {
           console.log(e);
        });
    }
}

export default ListaEmpleados;
