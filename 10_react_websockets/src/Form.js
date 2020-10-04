import React from 'react';



class Form extends React.Component {
    // Estado inicial del formularo
    initialState = {
        message: '',
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
        this.props.onSubmit(this.state.message);
        // Reseteamos los datos del formulario a su estado inicial
        this.setState(this.initialState);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="message" id="campo_message" onChange={this.handleChange} value={this.state.message}/><br/>
                    <input type='submit' value='Enviar'/>
                </form>
            </div>
        );
    }
}

export default Form;
