import React, {Component} from 'react';
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
        <h2>Cadastrar Cursos</h2>
        <h4>Informações do Curso</h4>
        <form action="/cadCurso" method="POST">
            <input type="text" placeholder="Código do Curso" name="codCurso"/><br/>
            <input type="text" placeholder="Nome do Curso" name="nomeCurso"/>
            <button type="submit">Cadastrar</button>
        </form>
        </header>
        <p className="App-intro">{this.state.response}</p>
      </div>
    );
  }
}

export default NewCourse;