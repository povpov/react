import {CHANGETHEME} from '../actions/theme';

const changetheme = (value) => {
    return {
        type: CHANGETHEME,
        value: value
    }
};

export {changetheme};