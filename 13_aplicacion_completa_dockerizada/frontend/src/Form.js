import React from 'react';

const initialState = {
        first_name: '',
        last_name: '',
        birthday: '',
        gender: '',
        full_time: false,
        salario: 0,
        show_error: false
};

// rgb(118, 118, 118)

class Form extends React.Component {
    state = initialState;

    handleChange = (e) => {
        // Forma moderna
        const {name, value} = e.target;

        // Forma moderna
        if (e.target.type === 'checkbox') {
            this.setState({[name]: e.target.checked})
        } else if (e.target.type === 'radio') {
            if (value === 'hombre') {
                this.setState({[name]: 'hombre'})
            } else if (value === 'mujer') {
                this.setState({[name]: 'mujer'})
            } else if (value === 'otro') {
                this.setState({[name]: 'otro'})
            } else if (value === 'ne') {
                this.setState({[name]: 'ne'})
            }
        } else {
            this.setState({[name]: value})
        }
    };

    enviar() {
        // Validación manual antes de enviar los datos
        let ko = this.state.first_name === '' || this.state.last_name === '' || this.state.birthday === '' || this.state.genre === '';
        // Si uno de estos campos no está completo, no podremos mandar el formulario
        if (ko) {
            this.setState({show_error: true});
        } else {
            this.setState(initialState);
            this.props.guardar(this.state)

        }
    }

    render() {
        return (
            <div>
            {/*  Formulario controlled, para que esté sincronizado con el state del componente  */}
            <form>
                <label htmlFor="campo_nombre">Nombre</label>
                <input type="text" name="first_name" id="campo_nombre" onChange={this.handleChange} value={this.state.first_name}/><br/>
                <label htmlFor="campo_apellidos">Apellidos</label>
                <input type="text" name="last_name" id="campo_apellidos" onChange={this.handleChange} value={this.state.last_name}/><br/>

                <label htmlFor="campo_fecha">Fecha nacimiento</label>
                <input type="date" name="birthday" id="campo_fecha" onChange={this.handleChange} value={this.state.birthday}/><br/>

                <label htmlFor="campo_sexo_hombre">Hombre</label>
                <input type="radio" name="gender" id="campo_sexo_hombre" value="hombre" onChange={this.handleChange} checked={this.state.gender === 'hombre'}/><br/>
                <label htmlFor="campo_sexo_mujer">Mujer</label>
                <input type="radio" name="gender" id="campo_sexo_mujer" value="mujer" onChange={this.handleChange} checked={this.state.gender === 'mujer'}/><br/>
                <label htmlFor="campo_sexo_otro">Otro</label>
                <input type="radio" name="gender" id="campo_sexo_otro" value="otro" onChange={this.handleChange} checked={this.state.gender === 'otro'}/><br/>
                <label htmlFor="campo_sexo_no_especificado">No especificado</label>
                <input type="radio" name="gender" id="campo_sexo_no_especificado" value="ne" onChange={this.handleChange} checked={this.state.gender === 'ne'}/><br/>

                <label htmlFor="campo_tiempo_completo">Tiempo completo</label>
                <input type="checkbox" name="full_time" id="campo_tiempo_completo" onChange={this.handleChange} checked={this.state.full_time}/><br/>
                <label htmlFor="campo_salario">Salario</label>
                <input type="number" name="salario" id="campo_salario" onChange={this.handleChange} value={this.state.salario}/><br/>
                <input type='button' value='Enviar' onClick={() => {this.enviar()}}/>
            </form>
                {this.state.show_error ? <p style={{color: "red"}}>Por favor, rellena todos los campos</p>:''}
            </div>

    );
    }
}

export default Form;
