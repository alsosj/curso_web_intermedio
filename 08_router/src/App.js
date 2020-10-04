import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ListaEmpleados from "./Empleados/ListaEmpleados";
import Album from "./Fotos/Album";
import Peliculas from "./Cine/Peliculas";

class App extends React.Component {
    state = {
        cabecera: ['Nombre', 'Apellidos', 'Fecha de nacimiento', 'Sexo', 'Tiempo parcial', 'Borrar'],
        datos: [
            ['Alfonso', 'Izquierdo', '27/11/1971', 'Hombre', true, ''],
            ['Macarena', 'Díaz', '27/11/1973', 'Mujer', false, ''],
        ]
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/empleados" component={ListaEmpleados}/>
                    <Route path="/fotos" component={Album}/>
                    <Route path="/peliculas" component={Peliculas}/>
                </Switch>
            </BrowserRouter>
        );
      //return <Table cabecera={this.state.cabecera} filas={this.state.datos} borrarFila={this.borrarFila}/>;
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
}

export default App;
