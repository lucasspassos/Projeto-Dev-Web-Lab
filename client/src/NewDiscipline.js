import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './login.css';

class NewDiscipline extends Component {
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
        <h2>Cadastrar Disciplina</h2>
         <h4>Informações da Disciplina</h4>
        <form action="/cadDisciplina" method="POST">
            <input type="text" placeholder="Código da Disciplina" name="codDisciplina"/>
            <input type="text" placeholder="Nome da Disciplina" name="nomeDisciplina"/><br/>
            <input list="Cursos" placeholder="Cursos relacionados" name="cursosRel"/>
            <datalist id="Cursos">
                <option value="Engenharia da Computação"/>
                <option value="Engenharia Elétrica"/>
                <option value="Engenharia Mecânica"/>
            </datalist>   
       
            <button type="submit">Cadastrar</button>
        </form>
        </header>
        <p className="App-intro">{this.state.response}</p>
      </div>
    );
  }
}

export default NewDiscipline;