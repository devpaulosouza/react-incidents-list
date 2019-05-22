import React, { Component } from 'react'
import BoxTitle from '../BoxTitle/BoxTitle'
import './SituacaoAdd.css'

class SituacaoAdd extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lengthName: 0,
            lengthDesc: 0
        }
    }

    countLenghtName(e) {
        let valueName = e.target.value
        this.setState({
            lengthName: valueName.length
        })
    }

    countLenghtDesc(e) {
        let valueDesc = e.target.value
        this.setState({
            lengthDesc: valueDesc.length
        })
    }

    render() {
        return(
            <div className="container">
                <div className="container__box">
                    <BoxTitle title="Situação">
                        <div className="title__buttons">
                            <a href="/">Voltar</a>
                            <a href="/" onClick={this.props.handleSave}>Salvar</a>
                        </div>
                    </BoxTitle>
                    
                    <div className="container">
                        <div className="row formregister">
                            <div className="col-lg-3">
                                <label htmlFor="">Nome *</label>
                                <input type="text" maxLength="20" data-js="nome"
                                className="form-control formregister__input" 
                                onChange={(e) => this.countLenghtName(e)}
                                aria-describedby="nomeHelp" />
                                <small id="descHelp" 
                                className="form-text text-muted text-right">
                                    {this.state.lengthName}/20
                                </small>
                            </div>
                            <div className="col-lg-9">
                                <label htmlFor="">Descrição *</label>
                                <input type="text" maxLength="240" data-js="desc"
                                className="form-control formregister__input" 
                                onChange={(e) => this.countLenghtDesc(e)}
                                aria-describedby="descHelp" />
                                <small id="descHelp" 
                                className="form-text text-muted text-right">
                                    {this.state.lengthDesc}/240
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SituacaoAdd;