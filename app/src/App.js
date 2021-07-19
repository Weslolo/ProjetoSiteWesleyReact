import React from 'react';
import HomeScreen from './pages/Home/HomeScreen';
import Receitas from './pages/receitas/Receitas';
import Ver from './pages/Ver/Ver';
import Somos from './pages/somos/somos';
import FooterComponent from './components/footer/footerComponent';
import HeaderComponent from './components/header/Header';
import './global.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

// import { Container } from './styles';

function App() {
    return (
        <Router>
            <HeaderComponent />

            <Switch>
                <Route exact path="/">
                    <HomeScreen />
                </Route>
                <Route exact path="/receitas">
                    <Receitas />
                </Route>
                <Route exact path="/ver/:id">
                    <Ver />
                </Route>
                <Route exact path="/somos">
                    <Somos/>
                </Route>
                <Route component={() => {
                    return (<div style={{ height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><p>404</p></div>)
                }} />
            </Switch>
            <FooterComponent />
        </Router>
    );
}

export default App;