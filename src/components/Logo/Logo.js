import React from 'react';
import styles from './Logo.module.css';
import logo from './logo.png';

class Logo extends React.Component {

    render() {
        return (<>
                <div className={styles.logo}>
                    <img src={logo} alt=""/>
                </div>
            </>


        );
    }
}

export default Logo;