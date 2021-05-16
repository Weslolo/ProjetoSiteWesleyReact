import React from 'react';
import receitas from '../../database';
import CardComponent from '../../components/cards/cardComponent';

// import { Container } from './styles';
import {
    useHistory
} from "react-router-dom";
function Receitas() {
    let history = useHistory();

    return (
        <div>
            <section className="receitas" >
                {
                    receitas.map(x =>
                        <CardComponent
                            titulo={x.titulo}
                            imagem={x.imagem}
                            descricao={x.descricao}
                            onClick={() => {
                                history.push("/ver/" + x.id);
                            }
                            }
                        />
                    )
                }
            </section>
        </div>);
}

export default Receitas;