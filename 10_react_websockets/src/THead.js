import React from 'react';

function THead(props) {
    const cabeceras = props.columnas.map((columna, index) => {
        return <th key={index}>{columna}</th>;
    });

    return(
        <thead>
            <tr>
                {cabeceras}
            </tr>
        </thead>
    );
} export default THead;
