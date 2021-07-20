import React from 'react';
import './HeaderComponent.css'
// import { Container } from './styles';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";
function HeaderComponent() {


    return (
        <div>
            <header className="cabecalho" id="text3">
                <img className="logo" alt="" />
                <nav className="menu">
                    <ul className="menu__lista">
                        <li className="menu__item"> <NavLink exact to="/"   activeClassName="ativo"  className="menu__link" >Início </NavLink></li>
                        <li className="menu__item"> <NavLink   to="/receitas" activeClassName="ativo" className="menu__link" >Receitas </NavLink></li>
                        <li className="menu__item"> <NavLink   to="/somos" activeClassName="ativo" className="menu__link" >Quem somos </NavLink></li>
                        <li className="menu__item"> <NavLink   to="/comunidade" activeClassName="ativo" className="menu__link" >Comunidade </NavLink></li>
                       
                    </ul>
                </nav>
            </header>
        </div>);
}

export default HeaderComponent;