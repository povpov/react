import {combineReducers} from "redux";
import calc from "./calc";
import game from "./game";

let reducers=combineReducers({
    calc: calc,
    game: game
});

export default reducers
