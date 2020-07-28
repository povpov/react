import React from 'react';
import styles from './MainContent.module.css';
import {Route, Switch} from "react-router-dom";
import Calc from "../../Pages/Calc/Cacl";
import Projects from "../../Pages/Projects/Projects";
import Theme from "../../Pages/Theme/Theme";


const MainContent = (props) => {
    return (
        <div className={styles.main}>
            {/*<Switch>*/}
            {/*    <Route exact path='/' component=""/>*/}
            {/*    <Route path='/theme' component={Theme}/>*/}
            {/*    <Route path='/projects' component={Projects}/>*/}
            {/*    <Route path='/calc' component={Calc}/>*/}
            {/*</Switch>*/}
        </div>
    );
}

export default MainContent;