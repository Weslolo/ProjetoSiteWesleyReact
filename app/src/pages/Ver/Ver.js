import React from 'react';

// import { Container } from './styles';
import receitas from '../../database';
import './ReceitaVer.css';
import {
  Redirect,
  useParams
} from "react-router-dom";
function Ver() {
  let { id } = useParams();

  let _receita = receitas.filter(x => x.id == id)[0];




  return (<div>
    <div className="receita__container">
      <div className="receita__imagem__container">
        <img className="receita__imagem__ver" src={_receita.imagem} />
      </div>
      <h1>{_receita.titulo}</h1>
      <p>{_receita.descricao}</p>
      <h2>Ingredientes</h2>
      <ul>
        {_receita.ingredientes != null ? _receita.ingredientes.map((x,index)=>{
          return (<li key={index}>{x}</li>)
        })
      : <p>Sem Ingredientes</p>

      }
      </ul>
      <h2>Modo de Preparo</h2>
      <p>{_receita.modoDePreparo??"Sem Modo de Preparo"}</p>
    </div>
  </div>
  );
}

export default Ver;