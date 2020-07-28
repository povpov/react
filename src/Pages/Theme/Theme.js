import React from 'react';
import Button from "../../components/Button/Button";
import styles from './Theme.module.css';
import Title from "../../components/Title/Title";
import Home from "../../components/Home/Home";
import { connect } from 'react-redux';
import { changetheme, styletheme } from '../../Redux/actionCreators/theme';
import { bindActionCreators } from 'redux';

const Theme = (props) => {
    const { Theme, changetheme, styletheme } = props;

    return (
        <>
            <Title name={"Переключатель тем на странице"} />
            <div className={styles.wrapper}>
                <Button
                    text={"Красный"}
                    onClick={(e) => changetheme("red")}
                />
                <Button
                    text={"По умолчанию"}
                    onClick={(e) => changetheme("")}
                />
                <Button
                    text={"Зеленый"}
                    onClick={(e) => changetheme("green")}
                />
            </div>
            <Home />
        </>
    );

}
const mapStateToProps = state => {
    return {
        styletheme: state.theme.styletheme
    };
};

const mapDispatchToProps = () => {
    return (dispatch) => {
        return {
            changetheme: bindActionCreators(changetheme, dispatch),
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Theme);