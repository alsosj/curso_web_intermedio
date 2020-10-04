import React from 'react';
import './App.css';
import Form from "./Form";
import ListaMensajes from "./ListaMensajes";

class App extends React.Component {
    state = {
        messages: []
    }
    ws = new WebSocket('wss://echo.websocket.org')

    componentDidMount() {
        this.ws.onopen = () => {
            console.log('Conectado');
        };
        this.ws.onclose = () => {
            console.log('Desconectado');
        };
        this.ws.onmessage = (m) => {
            this.setState({ messages: [...this.state.messages, m.data]})
        };
    }

    enviarMensaje = (m) => {
        this.ws.send(m);
    }

    render() {
      return (
          <div>
              <ListaMensajes messages={this.state.messages}/>
              <Form onSubmit={this.enviarMensaje}/>
          </div>
      );
    }

}

export default App;
