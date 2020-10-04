import React from 'react';
import Form from './Form';
import { CsvToHtmlTable } from 'react-csv-to-table';

class App extends React.Component {
    state = {
        csvData: null,
        sep: ','
    }

    render() {
        return (
            <div>
                {
                    this.state.csvData !== null ?
                        <CsvToHtmlTable
                            data={this.state.csvData}
                            csvDelimiter={this.state.sep}
                            tableClassName="table table-striped table-bordered table-hover table-responsive-sm"
                        /> : '' }
                <Form cargar={this.cargarDatos}/>
            </div>
        );
    }

    cargarDatos = (datos) => {
        this.setState({csvData: datos});
    }
}

export default App;
