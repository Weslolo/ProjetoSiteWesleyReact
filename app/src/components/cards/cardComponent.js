import React from 'react';
import "./card.css";

// import { Container } from './styles';


/**
 * 
 * @param {{titulo: string, descricao: string, imagem: string, onClick: Function}} props 
 */

function CardComponent(props) {
  return (
    <div className="receita">
      <img alt="Tigela de abacate" onClick={()=>props.onClick()} className="receita__imagem" src={props.imagem} />
      <div className="receita__conteudo">
        <h4 className="receita__titulo">{props.titulo}</h4>
        <p className="receita__descricao">{props.descricao}</p>
        <button className="receita__botao" onClick={()=>props.onClick()}>Ver receita</button>
      </div>
    </div>
  );
}

export default CardComponent;