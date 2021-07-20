import React from 'react';

import './comunidade.css';
// import { Container } from './styles';

function Comunidade() {
  

    return (
        <div className="logoa" >

          <p className="p">
              Bem vindo a área da comunidade 
              
          </p>
          
           <p className='p'>temos comunidade no fecebook e no instagram</p> 
          
        <a className="logo2" href="https://www.facebook.com/Del%C3%ADcias-sem-gl%C3%BAten-102226938247214" target="blank" style={{color:'cadetblue'}}>
            <ion-icon size="" name="logo-facebook"></ion-icon>
            </a>
          <a href="https://www.instagram.com/wesleyhellstromramos/" className="logo2" target="blank" style={{color:'cadetblue'}}>
              <ion-icon size="" name="logo-instagram"></ion-icon></a>

        </div>);
}

export default Comunidade;