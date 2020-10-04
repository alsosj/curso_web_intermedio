import React from 'react';



class Form extends React.Component {
    // Estado inicial del formularo
    initialState = {
        query: '',
    }

    constructor() {
        super();
        // Establecemos el estado del formulario al inicial
        this.state = this.initialState;
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value})
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.buscar(this.state.query);
        // Reseteamos los datos del formulario a su estado inicial
        this.setState(this.initialState);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="campo_query">Búsqueda</label>
                    <input type="text" name="query" id="campo_query" onChange={this.handleChange} value={this.state.query}/><br/>
                    <input type='submit' value='Enviar'/>
                </form>
            </div>
        );
    }
}

export default Form;
