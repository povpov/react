import React from 'react';
import Button from "../../components/Button/Button";
import styles from './Theme.module.css';
import Title from "../../components/Title/Title";

const Theme = (props) => {
    let onClickTheme = (e) => {
        let id = e.target.id;

    }
    return (
        <>
            <Title name={"Переключатель тем на странице"}/>
            <div className={styles.wrapper}>
                <Button
                    text={"Красный"}
                    id={"red"}
                    onClick={onClickTheme}
                />
                <Button
                    text={"По умолчанию"}
                    id={"yellow"}
                    onClick={onClickTheme}
                />
                <Button
                    text={"Зеленый"}
                    id={"green"}
                    onClick={onClickTheme}
                />
            </div>
        </>
    );

}

export default Theme;
