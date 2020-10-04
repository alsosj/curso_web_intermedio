import React from 'react';



class Form extends React.Component {
    state = {
        csvData: '',
        buttonHidden: true
    }

    handleChange = (e) => {
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({csvData: fileReader.result, buttonHidden: false})
        }
        fileReader.readAsText(e.target.files[0]);
    };

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.cargar(this.state.csvData);
    }

    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="campo_fichero">Fichero</label>
                <input type="file" name="nombre" id="campo_fichero" onChange={this.handleChange}/><br/>
                <input type='submit' value='Enviar' hidden={this.state.buttonHidden}/>
            </form>
            </div>

    );
    }
}

export default Form;
