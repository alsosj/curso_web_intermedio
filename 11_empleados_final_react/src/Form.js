import React from 'react';


class Form extends React.Component {
    state = {
        first_name: '',
        last_name: '',
        birthday: '',
        gender: '',
        full_time: false,
        salario: 0
    }

    handleChange = (e) => {
        // Forma tradicional
        //const nombreInput = e.target.name;
        //const value = e.target.value;

        // Forma moderna
        const {name, value} = e.target;

        // Forma tradicional
        /*if (name === 'nombre') {
            this.setState({nombre: value})
        } else if (name === 'apellidos') {
            this.setState({apellidos: value})
        } else if (name === 'fecha') {
            this.setState({fecha: value})
        } else if (name === 'sexo') {
            this.setState({sexo: value})
        } else if (name === 'tiempo_parcial') {
            this.setState({tiempo_parcial: value})
        }*/

        // Forma moderna
        if (e.target.type === 'checkbox') {
            this.setState({[name]: e.target.checked})
        } else {
            this.setState({[name]: value})
        }
    };

    enviar() {
        this.props.guardar(this.state)
        // Aún no
        // this.setState({nombre: '', apellidos: '', fecha: '', sexo: '', tiempo_parcial: false})
    }
//                <input type='button' value='Enviar' onClick={() => {this.enviar()}}/>
    render() {
        return (
            <div>
            <form>
                <label htmlFor="campo_nombre">Nombre</label>
                <input type="text" name="first_name" id="campo_nombre" onChange={this.handleChange}/><br/>
                <label htmlFor="campo_apellidos">Apellidos</label>
                <input type="text" name="last_name" id="campo_apellidos" onChange={this.handleChange}/><br/>

                <label htmlFor="campo_fecha">Fecha nacimiento</label>
                <input type="date" name="birthday" id="campo_fecha" onChange={this.handleChange}/><br/>

                <label htmlFor="campo_sexo_hombre">Hombre</label>
                <input type="radio" name="gender" id="campo_sexo_hombre" value="hombre" onChange={this.handleChange}/><br/>
                <label htmlFor="campo_sexo_mujer">Mujer</label>
                <input type="radio" name="gender" id="campo_sexo_mujer" value="mujer" onChange={this.handleChange}/><br/>
                <label htmlFor="campo_sexo_otro">Otro</label>
                <input type="radio" name="gender" id="campo_sexo_otro" value="otro" onChange={this.handleChange}/><br/>
                <label htmlFor="campo_sexo_no_especificado">No especificado</label>
                <input type="radio" name="gender" id="campo_sexo_no_especificado" value="ne" onChange={this.handleChange}/><br/>

                <label htmlFor="campo_tiempo_parcial">Tiempo completo</label>
                <input type="checkbox" name="full_time" id="campo_tiempo_parcial" onChange={this.handleChange}/><br/>
                <label htmlFor="campo_salario">Salario</label>
                <input type="number" name="salario" id="campo_salario" onChange={this.handleChange}/><br/>
                <input type='button' value='Enviar' onClick={() => {this.enviar()}}/>
            </form>
            </div>

    );
    }
}

export default Form;
