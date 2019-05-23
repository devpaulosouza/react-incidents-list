import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import SituacoesList from '../SituacoesList/SituacoesList'
import SituacaoAdd from '../SituacaoAdd/SituacaoAdd'
import logo from '../assets/img/logo-agrotis.png'

class App extends Component {
  constructor(props) {
    super(props)

    this.handleSave = this.handleSave.bind(this)

    this.state = {
      data: [
        {
          nome: 'Andamento',
          desc: 'Quando o contrato está em andamento e pode ser alterado'
        },
        {
          nome: 'Finalizado',
          desc: 'Quando o contrato foi atendido e não pode ser modificado'
        },
        {
          nome: 'Andamento',
          desc: 'Quando o contrato está em andamento e pode ser alterado'
        },
        {
          nome: 'Andamento',
          desc: 'Quando o contrato está em andamento e pode ser alterado'
        },
        {
          nome: 'Finalizado',
          desc: 'Quando o contrato foi atendido e não pode ser modificado'
        },
        {
          nome: 'Andamento',
          desc: 'Quando o contrato está em andamento e pode ser alterado'
        },
        {
          nome: 'Andamento',
          desc: 'Quando o contrato está em andamento e pode ser alterado'
        },
        {
          nome: 'Finalizado',
          desc: 'Quando o contrato foi atendido e não pode ser modificado'
        },
        {
          nome: 'Andamento',
          desc: 'Quando o contrato está em andamento e pode ser alterado'
        },
        {
          nome: 'Último',
          desc: 'Quando o contrato está em andamento e pode ser alterado'
        },
      ]
    }
  }

  handleSave(nome, desc) {
    this.setState(prevData =>({
      data: [{nome, desc}, ...prevData.data]
    }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header container-fluid">
          <div className="logo">
            <a href="/">
              <img className="logo__img" src={logo} alt="Logo Agrotis" />
            </a>
          </div>
        </header>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact
              render={() => <SituacoesList data={this.state.data} />} />
            <Route path="/addnew" exact
              render={() => <SituacaoAdd data={this.state.data}
              handleSave={this.handleSave} />} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
