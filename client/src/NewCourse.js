import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './login.css';

class NewCourse extends Component {
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
          <h2>Cadastrar Cursos</h2>
          <h4>Informações do Curso</h4>
          <form action="/cadCurso" method="POST">
            <input className="Input" type="text" placeholder="Código do Curso" name="codCurso" /><br />
            <input className="Input" type="text" placeholder="Nome do Curso" name="nomeCurso" />
            <button className="Btn" type="submit">Cadastrar</button>
          </form>
        </body>
        <p className="App-intro">{this.state.response}</p>
      </div>
    );
  }
}

export default NewCourse;