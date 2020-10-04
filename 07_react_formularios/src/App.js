import React from 'react';
import TablaPersonal from "./TablaPersonal";
import Form from './Form';

class App extends React.Component {
    state = {
        cabecera: ['Nombre', 'Apellidos', 'Fecha de nacimiento', 'Sexo', 'Tiempo parcial', 'Borrar'],
        datos: [
            {nombre: 'Alfonso', apellidos: 'Izquierdo', fecha: '27/11/1971', sexo: 'Hombre', tiempo_parcial: true},
            {nombre: 'Macarena', apellidos: 'Díez', fecha: '28/3/1993', sexo: 'Mujer', tiempo_parcial: false},
        ]
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
        const nuevasFilas = this.state.datos.filter((fila, index) => {
            return index !== indiceBorrar;
        });

        //this.state.datos = nuevasFilas; // MAL: React no se daría cuenta del cambio y no repintaría la tabla
        this.setState({datos: nuevasFilas});
    };

    anadirEmpleado = (nuevoEmpleado) => {
        // Forma tradicional
        /*const nuevosDatos = this.state.datos;
        nuevosDatos.push(nuevoEmpleado);
        this.setState({datos: nuevosDatos});*/

        // Forma moderna
        this.setState({datos: [...this.state.datos, nuevoEmpleado]});
    }
}

export default App;
