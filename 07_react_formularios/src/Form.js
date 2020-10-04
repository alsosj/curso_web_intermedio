import React from 'react';



class Form extends React.Component {
    state = {
        nombre: '',
        apellidos: '',
        fecha: '',
        sexo: '',
        tiempo_parcial: false
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
        this.setState({nombre: '', apellidos: '', fecha: '', sexo: '', tiempo_parcial: false})
    }

    render() {
        return (
            <div>
            <form>
                <label htmlFor="campo_nombre">Nombre</label>
                <input type="text" name="nombre" id="campo_nombre" onChange={this.handleChange}/><br/>
                <label htmlFor="campo_apellidos">Apellidos</label>
                <input type="text" name="apellidos" id="campo_apellidos" onChange={this.handleChange}/><br/>

                <label htmlFor="campo_fecha">Fecha nacimiento</label>
                <input type="date" name="fecha" id="campo_fecha" onChange={this.handleChange}/><br/>

                <label htmlFor="campo_sexo_hombre">Hombre</label>
                <input type="radio" name="sexo" id="campo_sexo_hombre" value="hombre" onChange={this.handleChange}/><br/>
                <label htmlFor="campo_sexo_mujer">Mujer</label>
                <input type="radio" name="sexo" id="campo_sexo_mujer" value="mujer" onChange={this.handleChange}/><br/>
                <label htmlFor="campo_sexo_otro">Otro</label>
                <input type="radio" name="sexo" id="campo_sexo_otro" value="otro" onChange={this.handleChange}/><br/>
                <label htmlFor="campo_sexo_no_especificado">No especificado</label>
                <input type="radio" name="sexo" id="campo_sexo_no_especificado" value="ne" onChange={this.handleChange}/><br/>

                <label htmlFor="campo_tiempo_parcial">Tiempo parcial</label>
                <input type="checkbox" name="tiempo_parcial" id="campo_tiempo_parcial" onChange={this.handleChange}/><br/>
                <input type='button' value='Enviar' onClick={() => {this.enviar()}}/>
            </form>
            </div>

    );
    }
}

export default Form;
