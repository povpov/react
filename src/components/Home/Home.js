import React from 'react';
import styles from './Hpme.module.css';
import { useHistory } from "react-router-dom";

const Home = (props) => {
    let history = useHistory();

    function handleClick() {
        history.push("/");
    }

    return (
        <div className={styles.home}>
            <button

                onClick={handleClick}
            >
                Вернуться к проектам
            </button>
        </div>
    );
}

export default Home;