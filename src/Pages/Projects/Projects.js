import React from 'react';
import styles from './Projects.module.css';
import Card from "../../components/Card/Card";
import Title from "../../components/Title/Title";
import ImageCacl from "./img/calc.png";
import ThemeCacl from "./img/theme.png";
import Game from "./img/game.png";


const Projects = (props) => {
    const projects = [
        {
            name: 'Калькулятор',
            description: "Калькулятор поддерживает 'ручной' ввод значений с клавиатры",
            urlPage: "/calc",

            backgroundUrl: ImageCacl
        },
        {
            name: 'Темы',
            description: "Темы для сайта.",
            urlPage: "/theme",
            backgroundUrl: ThemeCacl
        },
        {
            name: 'Игра в 15',
            description: "Игра в пятнашки",
            urlPage: "/game",
            backgroundUrl: Game
        },
    ]
    let cards = projects.map(elem =>
        <Card
            name={elem.name}
            description={elem.description}
            urlPage={elem.urlPage}
            backgroundUrl={elem.backgroundUrl}
        />
    );
    return (
        <div>
            <Title name="Проекты"/>
            <div className={styles.cards}>
                {cards}
            </div>
        </div>

    );
}

export default Projects;
