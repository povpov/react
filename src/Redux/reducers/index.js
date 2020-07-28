import { combineReducers } from "redux";
import calc from "./calc";
import game from "./game";
import theme from "./theme";

let reducers = combineReducers({
    calc: calc,
    game: game,
    theme: theme
});

export default reducers
