import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './login.css';

class NewPlan extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('http://localhost:4000/newPlan');
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
        <h2>Plano de Ensino</h2>
            <form action="/cadPlano" method="POST">
                <label>Disciplina</label>
                <input className="Input" type="text" placeholder="Ex: Desenvolvimento de Aplicações Web" name="disciplina"/>
                <br></br>
                <label>Professor Responsável</label>
                <input className="Input" type="text" placeholder="Ex:Andre Breda Carneiro " name="professorResponsavel"/>
                <br></br>
                <label>Coordenador</label>
                <input className="Input" type="text" placeholder="Ex: Andrea Lucia Vieira" name="coordenador"/>
                <br></br>
                <label>Ultima Atualização</label>
                <input className="Input" type="text" placeholder="Ex: 10/03/2019" name="atualização"/>
                <hr></hr>
                <label >Carga Horária</label>
                <br></br>
                <label>Teoria</label>
                <input className="Time" type="text" placeholder="Ex: 40" name="teoria"/>
                <label>Pratica</label>
                <input className="Time" type="text" placeholder="Ex: 50" name="prática"/>
                <br></br>
                <label>Total</label>
                <input className="Time" type="text" placeholder="Ex: 90" name="total"/>
                <br></br>
                
                <hr></hr>
                <label>Ementa</label>
                <textarea className="TextArea" placeholder="O que será abordado na disciplina?" rows="5" cols="100" name="ementa"></textarea>
                <br/>
                <label>Objetivo</label>
                <textarea className="TextArea" placeholder="Quais objetivos para essa disciplina?" rows="50" cols="100" name="objetivo"></textarea>
                <br/>
                <hr></hr>
                <label>Conteúdo Programático </label>
                <br></br>
                <label>Modulo 1</label>
                <textarea className="TextArea" placeholder="Assunto por aula no modulo 1" rows="5" cols="5" name="contProgM1"></textarea>
                <label>Modulo 2</label>
                <textarea className="TextArea" placeholder="Assunto por aula no modulo 2" rows="5" cols="5" name="contProgM2"></textarea>
                <hr></hr>
                <label>Metodologia de Ensino</label>
                <textarea className="TextArea" placeholder="Como o assunto da aula será aplicado?" rows="10" cols="5" name="metodologiaEnsino"></textarea>
                <hr></hr>
                <label>Avaliação</label>
                <textarea className="TextArea" placeholder="Como funcionará o sistema de avaliação" rows="10" cols="5" name="metodoAvaliação"></textarea>
                <hr></hr>
                <label>Bibliográfia Básica</label>
                <textarea className="TextArea" placeholder="Quais livros ou links são recomendados?" rows="10" cols="5" name="metodoAvaliação"></textarea>
                <label>Bibliográfia Complementar</label>
                <textarea className="TextArea" placeholder="Quais livros ou links complementares são recomendados?" rows="10" cols="5" name="metodoAvaliação"></textarea>
                <button  className="Btn" type="submit">Cadastrar</button>
            </form> 
        </body>
        <p className="App-intro">{this.state.response}</p>
      </div>
    );
  }
}

export default NewPlan;