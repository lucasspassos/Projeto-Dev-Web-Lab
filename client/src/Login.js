import React, {Component} from 'react';
import logo from './FacensLogo.png';
import './App.css';
import './login.css';

class Login extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('http://localhost:3000/Login');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h3>Digite seus dados para Acessar!</h3>
            <form action="/login" method="POST">
                <input className="Input" type="text" placeholder="CPF" name="cpf"/>
                <br/>
                <input className="Input" type="password" placeholder="Senha" name="senha"/>
                <br/>
                <button className="Btn" type="submit">Entrar</button>
            </form> 
        </header>
        <p className="App-intro">{this.state.response}</p>
      </div>
    );
  }
}

export default Login;