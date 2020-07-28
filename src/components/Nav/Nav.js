import React from 'react';
import styles from './Nav.module.css';
import {NavLink} from 'react-router-dom'

class Nav extends React.Component {

    render() {
        return (
            <nav className={styles.nav}>
                <div className={styles.navbar}>
                    <div><NavLink to='/projects'>Home</NavLink></div>
                    <div><NavLink to='/calc'>Calculator</NavLink></div>
                    <div><NavLink to='/game'>Game 15</NavLink></div>
                    <div><NavLink to='/theme'>Themes</NavLink></div>
                </div>
            </nav>

        );
    }
}

export default Nav;