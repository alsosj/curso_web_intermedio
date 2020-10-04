import React from 'react';

function ListaMensajes (props)  {
    const messages = props.messages.map((m, i) => {
        return <li key={i}>{m}</li>
    });
    return <ul>{messages}</ul>;
}
export default ListaMensajes;
