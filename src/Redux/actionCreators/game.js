import {NEWGAME, MOVE} from '../actions/game';

const move = (value) => {
    return {
        type: MOVE,
        value: value
    }
}

const newgame = (value) => {
    return {
        type: NEWGAME,
        value: value
    }
}

export {newgame, move};
