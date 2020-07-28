import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {Route, Switch} from "react-router-dom";
import Theme from "./Pages/Theme/Theme";
import Projects from "./Pages/Projects/Projects";
import Calc from "./Pages/Calc/Cacl";
import Game from "./Pages/Game/Game";

const App = (props) => {
    return (
            <div className="wrapper">
                <Header/>
                <div className="main">
                    <Switch>
                        <Route exact path='/' component={Projects}/>
                        <Route path='/theme' component={Theme}/>
                        <Route path='/projects' component={Projects}/>
                        <Route path='/calc' component={Calc}/>
                        <Route path='/game' component={Game}/>
                    </Switch>
                </div>
                <Footer/>
            </div>
    )
}


export default App;