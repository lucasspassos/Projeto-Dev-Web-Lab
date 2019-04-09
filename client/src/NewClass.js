import React, { Component } from 'react';
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
            <form action="/cadTurma" method="POST">
          <h2>Cadastrar Turma</h2>
          <br></br>
            <label className="LabelCad">Código da Turma</label>
            <input className="Input" type="text" placeholder="Código da Turma" name="turma" />
            <br />
            <label className="LabelCad">Disciplina</label>
            <input className="Input" list="Titulo" placeholder="Disciplina" name="disciplina" />
            <datalist id="disciplina">
              <option value="Desenvolvimento Web - Teoria" />
              <option value="Desenvolvimento Web - Prática" />
              <option value="Técnologias Web - Teoria" />
              <option value="Técnologias Web - Prática" />
            </datalist>
            <br />
            <label className="LabelCad">Horario inicial da aula</label>
            <input className="Input" type="text" placeholder="Ex: 19:00" name="hora" />
            <br />
            <hr />
            <button className="Btn"type="submit">Cadastrar</button>
          </form>
        </body>
        <p className="App-intro">{this.state.response}</p>
      </div>
    );
  }
}

export default NewClass;