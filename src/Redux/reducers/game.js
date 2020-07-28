import { NEWGAME, MOVE } from '../actions/game';

let initialstate = {
    items: getFirst(),
    score: 0,
    comment: '',
};

function game(state = initialstate, action) {
    switch (action.type) {
        case NEWGAME:
            return {
                ...state,
                score: 0,
                comment: addComment('new'),
                items: validate()
            };
        case MOVE:
            let data = moveItems(state, action.value);
            return {
                ...state,
                score: state.score + 1,
                items: action.value == 16 ? state.items : data,
                comment: data.join("") == getFirst().join("") ? addComment('over') : addComment('clear'),
            };
        default:
            return state;
    }
}
function moveItems(state, value) {
    let items = state.items;
    let itemIndex = items.indexOf(value);
    if ((items[itemIndex + 1] == 16 && itemIndex % 4 != 3)
        || (items[itemIndex - 1] == 16 && itemIndex % 4 != 0)
        || (items[itemIndex + 4] == 16 && itemIndex < 12) ||
        (items[itemIndex - 4] == 16 && itemIndex > 3)) {
        items[items.indexOf('16')] = value;
        items[itemIndex] = '16';
    }
    return items;

}
function addComment(data) {
    let message = {
        new: "Новая игра начинается!",
        over: "Вы выuграли! Игра закончена!",
        clear: "",
    };
    return message[data];
}

function toMix() {
    return getFirst().sort(function () {
        return Math.random() - 0.5;
    });

}
function validate() {
    let items;
    let k;
    while (true) {
        items = toMix();
        k = 0;
        for (let i = 0; i < 15; i++) {
            if (items[i] == '16') {
                k = k + Math.floor(i / 4) + 1;
            } else {
                for (let j = i; j < 16; j++) {
                    if (items[i] > items[j]) {
                        k++;
                    }
                }
            }
        }
        if (k % 2 == 0) return items;
    }
}

function getFirst() {
    let data ="1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16".split(",")
    console.log("data=",data);
    return data
}

export default game;