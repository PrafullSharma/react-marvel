import * as types from "../actions/actionTypes";
import initialState from './initialState';

export default function comicReducer(state = initialState.comics, action) {
  switch(action.type) {
    case types.LOAD_MARVEL_COMIC:
      return action.allcomic;

    default:
      return state;
  }
}
