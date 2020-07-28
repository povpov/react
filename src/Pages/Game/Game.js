import React from 'react';
import styles from './Game.module.css';
import Title from "../../components/Title/Title";
import Home from "../../components/Home/Home";
import { connect } from 'react-redux';
import { move, newgame } from '../../Redux/actionCreators/game';
import { bindActionCreators } from 'redux';


const Game = (props) => {
    const { Game, items, score, comment, newgame, move } = props;
    let buttons = items.map(elem =>
        <button
            className={styles.buttonGame}
            onClick={(e) => move(e.target.value)}
            value={elem}
        >
            {elem == 16 ? "" : elem}
        </button>
    );


    return (
        <div className={styles.container}>
            <Title name='Игра в "пятнашки"' />
            <div className={styles.text}>Для перемещения используйте клавиши: w - вверх, a - влево, s - вниз, d- вправо. </div>
            <div className={styles.flex}>
                <button
                    className={styles.new}
                    onClick={(e) => newgame(e)}
                >Новая игра</button>
                <div className={styles.field} >
                    {buttons}
                </div>
                <div className={styles.comment}>
                    <div>Ходы:
					<div className={styles.score}>{score}</div>
                    </div>
                    <div className={styles.comment1}>{comment} </div>
                </div>
            </div>
            <Home />
        </div>
    );
}

const mapStateToProps = state => {
    return {
        items: state.game.items,
        score: state.game.score,
        comment: state.game.comment
    };
};
//
const mapDispatchToProps = () => {
    return (dispatch) => {
        return {
            move: bindActionCreators(move, dispatch),
            newgame: bindActionCreators(newgame, dispatch),
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);