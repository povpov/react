import {CHANGESUM, ONCLICKCALCBUTTON} from '../actions/calc';

let initialstate = {
    sum: "",
    styleSum: 'black',
}

function calc(state = initialstate, action) {
    switch (action.type) {
        case CHANGESUM:
            return {
                ...state,
                sum: action.value
            };
        case ONCLICKCALCBUTTON:
            let data = selectButton(state, action);
            return {
                ...state,
                sum: data,
                styleSum: data === "ERROR" ? 'red' : 'black'
            };
        default:
            return state;
    }
}

const selectButton = (state, action) => {
    switch (action.value) {
        case "c":
            state.sum = "";
            break;
        case "=":
            try {
                state.sum = eval(state.sum);
            } catch (err) {
                return "ERROR";
            }
            if ((state.sum === Infinity) || (state.sum === undefined)) {
                return "ERROR";
            }
            break;
        default:
            state.sum = state.sum + action.value;
    }
    return state.sum
}

export default calc;