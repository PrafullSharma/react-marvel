import {combineReducers} from 'redux';
import comicReducer from "./comicReducer";

const rootReducer = combineReducers({
  comicReducer: comicReducer
})

export default rootReducer;
