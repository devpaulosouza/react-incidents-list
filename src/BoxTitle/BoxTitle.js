import React from 'react';
import './BoxTitle.css'

function BoxTitle(props) {
    return(
        <div className="container__title">
          <h1>{props.title}</h1>
          {props.children}
        </div>
    )
}

export default BoxTitle