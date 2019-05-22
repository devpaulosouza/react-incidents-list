import React, { Component } from 'react'
import './SituacoesList.css'
import SituacaoCard from '../SituacaoCard/SituacaoCard'
import BoxTitle from '../BoxTitle/BoxTitle'

class SituacoesList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      emptyList: '',
      filteredItems: [],
      displayItems: 2,
      // data: [
      //   {
      //     nome: 'Andamento',
      //     desc: 'Quando o contrato está em andamento e pode ser alterado'
      //   },
      //   {
      //     nome: 'Finalizado',
      //     desc: 'Quando o contrato foi atendido e não pode ser modificado'
      //   },
      //   {
      //     nome: 'Andamento',
      //     desc: 'Quando o contrato está em andamento e pode ser alterado'
      //   },
      //   {
      //     nome: 'Andamento',
      //     desc: 'Quando o contrato está em andamento e pode ser alterado'
      //   },
      //   {
      //     nome: 'Finalizado',
      //     desc: 'Quando o contrato foi atendido e não pode ser modificado'
      //   },
      //   {
      //     nome: 'Andamento',
      //     desc: 'Quando o contrato está em andamento e pode ser alterado'
      //   },
      //   {
      //     nome: 'Andamento',
      //     desc: 'Quando o contrato está em andamento e pode ser alterado'
      //   },
      //   {
      //     nome: 'Finalizado',
      //     desc: 'Quando o contrato foi atendido e não pode ser modificado'
      //   },
      //   {
      //     nome: 'Andamento',
      //     desc: 'Quando o contrato está em andamento e pode ser alterado'
      //   },
      //   {
      //     nome: 'Último',
      //     desc: 'Quando o contrato está em andamento e pode ser alterado'
      //   },
      // ]
    }

    this.handleFilter = this.handleFilter.bind(this);
    this.handleDisplayItems = this.handleDisplayItems.bind(this);
  }

  componentWillMount() {
    this.setState({
      filteredItems: this.props.data
    })
  }

  handleFilter(e) {
    let filteredList = this.props.data;

    filteredList = filteredList.filter(item => {
      return item.nome.toLowerCase().search(e.target.value.toLowerCase()) !== -1
    })
    this.setState({
      filteredItems: filteredList,
      displayItems: this.props.data.length
    })
    document.querySelector('.loadmore').style.display = 'none'

    // If search is empty, return to initial state
    if(e.target.value.length === 0) {
      this.setState({
        displayItems: 2
      })
      document.querySelector('.loadmore').style.display = 'block'
    }

    // If search results nothing, set message
    if(filteredList.length === 0) {
      this.setState({
        emptyList: 'Oops. Nada foi encontrado.'
      })
    } else {
      this.setState({
        emptyList: ''
      })
    }
  }

  handleDisplayItems(e) {
    e.preventDefault();
    if(this.state.displayItems === (this.props.data.length - 2)) {
      document.querySelector('.loadmore').style.display = 'none'
    }
    this.setState({
      displayItems: (this.state.displayItems + 2)
    })
  }

  render() {
    const dataList = this.state.filteredItems.slice(0, this.state.displayItems).map((item, i) => (
        <SituacaoCard key={i}
          nome={item.nome}
          desc={item.desc}
        />
      )
    )

    return(
      <div className="container">
        <div className="container__box">
          <BoxTitle title="Situações do documento">
            <div className="container__search">
              <input name="" type="text" placeholder="Pesquisar por nome..."
              onChange={this.handleFilter}
              value={this.state.filterList} />
            </div>
          </BoxTitle>
  
          {dataList}

          {this.state.emptyList}
  
          <div className="loadmore" onClick={this.handleDisplayItems}>
            <a href="loadmore">Carregar mais...</a>
            <div className="loadmore__itens">({this.state.displayItems} - {this.props.data.length})</div>
          </div>
  
          <div className="addmore">
            <a href="addnew" className="addmore__button" title="Novo registro"> </a>
          </div>
        </div>
      </div>
    )
  }
}

export default SituacoesList;