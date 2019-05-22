import React from 'react';
import './SituacaoCard.css'

function SituacaoCard(props) {
    return(
        <div className="container">
            <div className="card__box row">
                <div className="card__name col-lg-4">
                    Nome: <strong>{props.nome}</strong>
                </div>
                <div className="card__desc col-lg-8">
                    Descrição: <strong>{props.desc}</strong>
                </div>
            </div>
        </div>
    )
}

export default SituacaoCard;