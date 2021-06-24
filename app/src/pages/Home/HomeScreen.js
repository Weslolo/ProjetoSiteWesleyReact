import React from 'react';
import banner from '../../assets/img/banner.jpg';
import "./HomeScreen.css";
import CardComponent from '../../components/cards/cardComponent';
// import { Container } from './styles';
import receitas from '../../database';
import {
    useHistory
} from "react-router-dom";
function HomeScreen() {
    let history = useHistory();

    return (
        <div>
            <section className="banner">
                <div className="banner__imagem__container">
                </div>
                <img className="banner__imagem" src={banner} />
                <h2 className="banner__titulo">Padaria sem gluten. </h2>
            </section>
            <section className="sobre">
                <h2 className="sobre__titulo">Receitas para economizar e ganhar saúde</h2>
                <p className="sobre__descricao">Nossas receitas ajudam você a aproveitar melhor os alimentos,
            economizar, ganhar tempo e praticidade</p>
            </section>
            <section className="receitas" >
                {
                    receitas.slice(0, 3).map(x =>
                        <CardComponent
                            titulo={x.titulo}
                            imagem={x.imagem}
                            descricao={x.descricao}
                            onClick={() => {
                                history.push("/ver/"+x.id);
                            }
                            }
                        />
                    )
                }

            </section>
            <section className="quem-somos" id="text">
                <h3 className="quem-somos__titulo">Quem somos</h3>
                <p className="quem-somos__descricao">Conheça a comunidade por trás da iniciativa</p>
                <p className="ui" >Somos pessoas Intolerantes a glutem e sempre prezamos a qualidades dos nossos ingredientes </p>

            </section>

        </div>);
}

export default HomeScreen;