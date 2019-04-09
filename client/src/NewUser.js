import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './login.css';

class NewUser extends Component {
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
        <nav id="menu">
          <ul>
              <li><a href="/App">Home</a></li>
              <li><a href="/NewUser">Cadastrar Usuários</a></li>
              <li><a href="/NewPlan">Cadastrar Planos</a></li>
              <li><a href="/NewDiscipline">Cadastrar Disciplinas</a></li>
              <li><a href="/NewCourse">Cadastrar Cursos</a></li>
              <li><a href="/NewClass">Cadastrar Turmas</a></li>
              <li><a href="/Login">Sair</a></li>
          </ul>
        </nav>
        </header>
        <body className="log">
        <h2>Cadastrar Usuário</h2>
            <h4>Informações Pessoais</h4>
            <form action="/cadUsuario" method="POST">
                <input className="Input" type="text" placeholder="Nome" name="nome"/>
                <input className="Input" type="text" placeholder="Sobrenome" name="sobrenome"/>
                <input className="Input" type="text" placeholder="CPF" name="cpf"/>
                <br/>
                <input className="Input" list="Titulo" placeholder="Tipo de Usuário" name="titulacao"/>
                <br/>
                <datalist id="Titulo">
                    <option value="Administrador"/>
                    <option value="Coordenador"/>
                    <option value="Professor"/>
                </datalist>  
                <input className="Input" type="text" placeholder="Email" name="email"/>
                <br/>
                <hr></hr>
                <label >É membro do NDE?</label>
                <br></br>
                <input type="radio" name="membroNDE" value="sim"/> SIM
                <input type="radio" name="membroNDE" value="não"/> NÃO
                <br/>
                <hr></hr>
                <h4>Informações de Acesso</h4>
                <input className="Input" type="text" placeholder="Senha" name="senha"/>
                <input className="Input" type="text" placeholder="Repita a senha" name="rSenha"/>
                <br/>    
                <button className="Btn" type="submit">Cadastrar</button>
                <button className="BtnR" type="submit">Cancelar</button>
            </form> 
        </body>
        <p className="App-intro">{this.state.response}</p>
      </div>
    );
  }
}

export default NewUser;