import * as types from '../constants/actionTypes';
import initialState from '../reducers/initialState';

export default function(state = initialState.movies, action) {
  switch (action.type) {
    case types.GET_NOW_PLAYING_MOVIES_SUCCESS:
      return {
        ...state,
        nowPlayingMovies: action.nowPlayingMovies
      };

    case types.GET_POPULAR_MOVIES_SUCCESS:
      return {
        ...state,
        popularMovies: action.popularMovies
      };

    case types.GET_TOP_RATED_MOVIES_SUCCESS:
      return {
        ...state,
        topRatedMovies: action.topRatedMovies
      };

    case types.GET_UPCOMING_MOVIES_SUCCESS:
      return {
        ...state,
        upcomingMovies: action.upcomingMovies
      };

    // case types.GET_MOVIES_GENRES_SUCCESS:
    //   return {
    //     ...state,
    //     genres: action.moviesGenres
    //   };
    //
    // case types.GET_MOVIES_LIST_SUCCESS:
    //   return {
    //     ...state,
    //     list: action.list
    //   };
    //
    // case types.GET_MOVIE_DETAILS_SUCCESS:
    //   return {
    //     ...state,
    //     details: action.details
    //   };
    //
    // case types.GET_MOVIES_SEARCH_RESULT_SUCCESS:
    //   return {
    //     ...state,
    //     searchResults: action.searchResults
    //   };
    default:
      return state;
  }
}
