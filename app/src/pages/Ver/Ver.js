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
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '4rem', alignItems: 'start', flexWrap: 'wrap', }}>


        <div className="receita__imagem__container">
          <img className="receita__imagem__ver" src={_receita.imagem} />
          <h1>{_receita.titulo}</h1>
          <p>{_receita.descricao}</p>
        </div>
        <div style={{
          background: 'rgb(93, 164, 167)',
          borderRadius: '4rem',
          padding: '1rem',
          marginTop: '2rem',
          display: 'flex',
          width: '40%',
          maxWidth: '40%',
          minWidth: '40%',
          color: '#ffff',
          flexDirection: 'column',
          marginBottom: '3rem',
          boxShadow: "0px 0px 12px 2px rgba(0,0,0,0.28)"


        }}>

          <h2 className="ingredientes" >Ingredientes</h2>
          <ul className="lista">
            {_receita.ingredientes != null ? _receita.ingredientes.map((x, index) => {
              return (<li className="items" key={index}>{x}</li>)
            })
              : <p>Sem Ingredientes</p>

            }
          </ul>
        </div>
      </div>
      <div style={{
        padding: '2rem',
        display: 'flex',
        width: '80%',
        flexDirection: 'column',
        marginBottom: '3rem',
        position:'relative',
        left: '3.5% '
      }}>
        <h2 style={{ textAlign: 'center' }}>Modo de Preparo</h2>
        <p style={{ textAlign: 'justify', paddingLeft: '4rem' }}>{_receita.modoDePreparo ?? "Sem Modo de Preparo"}</p>
      </div>
    </div>
  </div>
  );
}

export default Ver;