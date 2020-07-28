import React from 'react';
import styles from './Calc.module.css';
import {connect} from 'react-redux';
import Title from "../../components/Title/Title";
import { changeSum, onClickCalcButton} from '../../Redux/actionCreators/calc';
import { bindActionCreators } from 'redux';

const Calc = (props) => {
    const {Calc, changeSum,onClickCalcButton,sum, styleSum} = props;
    const symbol = '0123456789+-*/=c';
    let buttons = symbol.split("").map(elem =>
        <button
            className={styles.buttonCalc}
            value={elem}
            onClick={(e) => onClickCalcButton(elem)}
        >
            {elem}
        </button>
    );
    return (
        <div className={styles.container}>
            <Title name="Калькулятор"/>
            <div className={styles.calc}>
                <input
                    className={styles.input}
                    style={{color: styleSum}}
                    type="text"
                    onChange={(e) => changeSum(e.target.value)}
                    value={sum}
                />
                <div className={styles.field}>
                    {buttons}
                </div>
            </div>
            <button
                className={styles.projects}
                onClick={""}
            >
                Вернуться к проектам
            </button>
        </div>
    );
}
const mapStateToProps = state => {
    return {
        sum: state.calc.sum,
        styleSum: state.calc.styleSum
    };
};
//
const mapDispatchToProps = () => {
    return (dispatch) => {
        return {
            changeSum: bindActionCreators(changeSum, dispatch),
            onClickCalcButton: bindActionCreators(onClickCalcButton, dispatch),
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Calc);