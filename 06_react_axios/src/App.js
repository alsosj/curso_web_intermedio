import React from 'react';
import logo from './logo.svg';
import './App.css';
import Table from "./Table";
import axios from 'axios';

class App extends React.Component {
    state = {
        cabecera: ['Id Album', 'Id Foto', 'Título', 'Imagen'],
        datos: []
    }

    componentDidMount() {
        const url = 'https://jsonplaceholder.typicode.com/photos';
        axios.get(url).then((response) => {
            this.setState({datos: response.data});
        });
    }

    render() {
      return (
          <div className="container">
              <Table cabecera={this.state.cabecera} filas={this.state.datos} borrarFila={this.borrarFila}/>
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
}

export default App;
