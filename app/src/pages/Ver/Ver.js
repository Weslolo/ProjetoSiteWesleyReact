import React from 'react';

// import { Container } from './styles';
import receitas from '../../database';

import {
    Redirect,
    useParams
  } from "react-router-dom";
function Ver() {
    let {id} = useParams();

    let _receita = receitas.filter(x=> x.id == id)[0];




  return (<div>
      <img src={_receita.imagem} />
      <h3>{_receita.titulo}</h3>
      <p>{_receita.descricao}</p>
  </div>);
}

export default Ver;