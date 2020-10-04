import React from 'react';



class Form extends React.Component {
    // Estado inicial del formularo
    initialState = {
        nombre: '',
        apellidos: '',
        fecha: null,
        sexo: '',
        tiempo_parcial: false
    }

    constructor() {
        super();
        // Establecemos el estado del formulario al inicial
        this.state = this.initialState;
    }

    handleChange = (e) => {
        const {name, value} = e.target;

        if (e.target.type === 'checkbox') {
            this.setState({[name]: e.target.checked})
        } else if (e.target.type === 'radio') {
            if (value === 'hombre') {
                this.setState({[name]: 'Hombre'})
            } else if (value === 'mujer') {
                this.setState({[name]: 'Mujer'})
            } else if (value === 'otro') {
                this.setState({[name]: 'Otro'})
            } else if (value === 'ne') {
                this.setState({[name]: 'No Especificado'})
            }
        } else if (e.target.type === 'date') {
            const date = new Date(value); // Convertimos el string en un objeto Date
            this.setState({[name]: date});
        } else {
            this.setState({[name]: value})
        }
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.guardar(this.state)
        // Reseteamos los datos del formulario a su estado inicial
        this.setState(this.initialState)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="campo_nombre">Nombre</label>
                    <input type="text" name="nombre" id="campo_nombre" onChange={this.handleChange} value={this.state.nombre}/><br/>

                    <label htmlFor="campo_apellidos">Apellidos</label>
                    <input type="text" name="apellidos" id="campo_apellidos" onChange={this.handleChange} value={this.state.apellidos}/><br/>

                    <label htmlFor="campo_fecha">Fecha nacimiento</label>
                    <input type="date" name="fecha" id="campo_fecha" onChange={this.handleChange} value={this.state.fecha !== null ? this.state.fecha.toISOString().split('T')[0] : ''}/><br/>

                    <label htmlFor="campo_sexo_hombre">Hombre</label>
                    <input type="radio" name="sexo" id="campo_sexo_hombre" value="hombre" onChange={this.handleChange} checked={this.state.sexo === 'Hombre'}/><br/>
                    <label htmlFor="campo_sexo_mujer">Mujer</label>
                    <input type="radio" name="sexo" id="campo_sexo_mujer" value="mujer" onChange={this.handleChange} checked={this.state.sexo === 'Mujer'}/><br/>
                    <label htmlFor="campo_sexo_otro">Otro</label>
                    <input type="radio" name="sexo" id="campo_sexo_otro" value="otro" onChange={this.handleChange} checked={this.state.sexo === 'Otro'}/><br/>
                    <label htmlFor="campo_sexo_no_especificado">No especificado</label>
                    <input type="radio" name="sexo" id="campo_sexo_no_especificado" value="ne" onChange={this.handleChange} checked={this.state.sexo === 'No Especificado'}/><br/>

                    <label htmlFor="campo_tiempo_parcial">Tiempo parcial</label>
                    <input type="checkbox" name="tiempo_parcial" id="campo_tiempo_parcial" onChange={this.handleChange}  checked={this.state.tiempo_parcial}/><br/>
                    <input type='submit' value='Enviar'/>
                </form>
            </div>
        );
    }
}

export default Form;
