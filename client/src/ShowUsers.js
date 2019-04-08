import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './login.css';

class UserRow extends React.Component {
    render() {
      const user = this.props.usuario;
        
      return (
        <tr>
          <td>{user.name}</td>
          <td>{user.sobrenome}</td>
        </tr>
      );
    }
  }
  

class ShowUsers extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('http://localhost:4000/showUsuarios');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    const rows = [];

    this.props.usuarios.array.forEach(usuario => {
        rows.push(<UserRow usuario={usuario} />);
    });

    return (    
      <div className="App">
        <header className="App-header">
        <h2>Usuários</h2>>
        <table border="1">
        <thead>
            <tr>
                <td>Nome</td>
                <td>Sobrenome</td>
            </tr>
        </thead>
        <tbody>{rows}</tbody>
        </table>
        <button><a href="/">Novo</a></button>
        </header>
        <p className="App-intro">{this.state.response}</p>
      </div>
    );
  }
}

export default ShowUsers;