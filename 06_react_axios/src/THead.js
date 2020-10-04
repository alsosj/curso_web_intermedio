import React from 'react';

function THead(props) {
    const cabeceras = props.columnas.map((columna, index) => {
        return <th key={index}>{columna}</th>;
    });

    return(
        <thead className="thead-dark">
            <tr>
                {cabeceras}
            </tr>
        </thead>
    );
} export default THead;
