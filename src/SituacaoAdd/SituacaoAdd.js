import React, { Component } from "react";

import { Link } from "react-router-dom";

import BoxTitle from "../BoxTitle/BoxTitle";
import "./SituacaoAdd.css";

class SituacaoAdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      desc: ""
    };

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDesc = this.onChangeDesc.bind(this);
  }

  onChangeName(target) {
    this.setState((prevState) => ({
      ...prevState,
      name: target.value
    }));
  }

  onChangeDesc(target) {
    this.setState((prevState) => ({
      ...prevState,
      desc: target.value
    }));
  }

  render() {
    const { name, desc } = this.state;
    const { handleSave } = this.props;
    return (
      <div className="container">
        <div className="container__box">
          <BoxTitle title="Situação">
            <div className="title__buttons">
              <Link to="/">Voltar</Link>
              <Link to="/" onClick={() => handleSave(name, desc)}>
                Salvar
              </Link>
            </div>
          </BoxTitle>

          <div className="container">
            <div className="row formregister">
              <div className="col-lg-3">
                <label htmlFor="">Nome *</label>
                <input
                  type="text"
                  maxLength="20"
                  data-js="nome"
                  className="form-control formregister__input"
                  onChange={(e) => this.onChangeName(e.target)}
                  aria-describedby="nomeHelp"
                />
                <small
                  id="descHelp"
                  className="form-text text-muted text-right">
                  {name.length}/20
                </small>
              </div>
              <div className="col-lg-9">
                <label htmlFor="">Descrição *</label>
                <input
                  type="text"
                  maxLength="240"
                  data-js="desc"
                  className="form-control formregister__input"
                  onChange={(e) => this.onChangeDesc(e.target)}
                  aria-describedby="descHelp"
                />
                <small
                  id="descHelp"
                  className="form-text text-muted text-right">
                  {desc.length}/240
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SituacaoAdd;
