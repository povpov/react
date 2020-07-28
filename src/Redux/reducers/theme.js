import {CHANGETHEME} from '../actions/theme';

let initialstate = {
    styletheme: '',
};

function theme(state = initialstate, action) {
    switch (action.type) {
        case CHANGETHEME:
            return {
                ...state,
                styletheme: action.value
            };
       
        default:
            return state;
    }
}
export default theme;