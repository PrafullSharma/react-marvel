import * as types from "./actionTypes";
import comicApi from '../api/marvelApi';

export function loadComicSuccess(allcomic) {
  return { type: types.LOAD_MARVEL_COMIC, allcomic: allcomic}
}

export function loadMarvelComics() {
  return function (dispatch) {
    return comicApi.getMarvel().then(allcomic => {
      dispatch(loadComicSuccess(allcomic))
    }).catch(error => {
      throw(error);
    })
  }
}

//comicApi.getMarvel();
