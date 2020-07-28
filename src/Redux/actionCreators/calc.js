import {CHANGESUM, ONCLICKCALCBUTTON} from '../actions/calc';

const changeSum = (value) => {
    return {
        type: CHANGESUM,
        value: value
    }
}

const onClickCalcButton = (value) => {
    return {
        type: ONCLICKCALCBUTTON,
        value: value
    }
}

export {changeSum, onClickCalcButton}
