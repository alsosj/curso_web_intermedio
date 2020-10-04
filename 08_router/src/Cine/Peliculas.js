import React from 'react';
import axios from 'axios';
import Form from "./Form";
import TablaPeliculas from "./TablaPeliculas";
import FichaPelicula from "./FichaPelicula";

const api_key = ''; // Poned vuestra Api Key, otenida de OMDb
class Peliculas extends React.Component {
    state = {
        resultados: [],
        detallePelicula: null
    }

    componentDidMount() {

    }

    onSearch = (query) => {
        // Lanzo la petición
        const url = 'http://www.omdbapi.com/?apikey=' + api_key + '&s=' + query;
        axios.get(url).then((r) => {
            this.setState({resultados: r.data.Search, detallePelicula: null})
        });
    }

    onClickedMovie = (id) => {
        // Lanzo la petición
        console.log(id);
        axios.get( 'http://www.omdbapi.com/?apikey=' + api_key + '&i=' + id).then((r) => {
            this.setState({detallePelicula: r.data});
        });
    }

    render() {
        return (
            <div>
                {
                    this.state.detallePelicula ? <FichaPelicula datos={this.state.detallePelicula}/> : this.state.resultados.length > 0 ? <TablaPeliculas cabecera={['Título', 'Año', 'Imagen']} filas={this.state.resultados} onClickedMovie={this.onClickedMovie}/> : ''
                }
                <Form buscar={this.onSearch}/>
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

export default Peliculas;
