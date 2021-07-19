import React from 'react';


import './quemSomos.css';

// import { Container } from './styles';

function Somos() {
    

    return (
        <div className= 'texto' > 
<section className="quem-somos" id="text">
        <h3 className="quem-somos__titulo">Quem somos</h3>
        <p className="quem-somos__descricao">Esse site é feito para ajudar pessoas que tem problemas com trigo  . 

        <p>Eu me chamo Wesley e vou contar minha história . </p>


    <p>eu decidi criar esse site para tentar ajudar as pessoas que tem problemas com glúten pois tenho pessoas na minha família que é celíaca , e tento ajudar ao máximo as pessoas que tem esse problema .
 </p>
</p>
        <div className="pessoas">
            <div className="pessoa">
                <div className="pessoa__imagem pessoa__imagem--wesley">
                </div>
                <span className="pessoa__nome">Wesley</span>
                <span className="pessoa__funcao">Chef de cozinha</span>
            </div>
        </div>
    </section>
    

        </div>
        
        );
        
}

export default Somos;