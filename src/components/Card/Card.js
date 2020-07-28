import React from 'react';
import styles from './Card.module.css';


const Card = (props) => {
    let onClickCard = () => {
        window.location.assign(props.urlPage);
    }

    debugger
    return (
        <>
            <div className={styles.card}>
                <div className={styles.cardImg}
                     style={{backgroundImage: `url(${props.backgroundUrl})`}}>
                </div>
                <div className={styles.title}>{props.name}</div>
                <div className={styles.description}>
                    {props.description}
                </div>
                <button className={styles.button} onClick={onClickCard}>Перейти</button>
            </div>
        </>

    );
}

export default Card;
