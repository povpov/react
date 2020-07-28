import React from 'react';
import styles from './Title.module.css';


const Title = (props) => {
    return (
        <>
            <div className={styles.title}>{props.name}</div>
        </>
    );

}

export default Title;
