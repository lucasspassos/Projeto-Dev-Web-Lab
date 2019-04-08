import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './login.css';

class NewClass extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('http://localhost:4000/cadUsuario');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h2>Cadastrar Turma</h2>
         <h4>Informações Pessoais</h4>
    <form action="/cadTurma" method="POST">
        <input type="text" placeholder="Nome" name="nome"/>
        <input type="text" placeholder="Sobrenome" name="sobrenome"/><br/>
        <input type="text" placeholder="CPF" name="cpf"/>
        <br/>
        <input list="Titulo" placeholder="Tipo de Usuário" name="titulacao"/>
        <datalist id="Titulo">
            <option value="Administrador"/>
            <option value="Coordenador"/>
            <option value="Professor"/>
        </datalist>   
        <br/>
        <input type="text" placeholder="Email" name="email"/>
        <br/>
        <label >É membro do NDE?</label><br/>
        <input type="radio" name="membroNDE" value="sim"/> SIM
        <input type="radio" name="membroNDE" value="não"/> NÃO
        <br/>
        <hr/> 
        <h4>Informações de Acesso</h4>
        <input type="text" placeholder="Senha" name="senha"/>
        <input type="text" placeholder="Repita a senha" name="rSenha"/>
        <br/>    
        <hr/> 
        <button type="submit">Cadastrar</button>
    </form>
        </header>
        <p className="App-intro">{this.state.response}</p>
      </div>
    );
  }
}

export default NewClass;