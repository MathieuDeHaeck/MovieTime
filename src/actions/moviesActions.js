// Todo: Flow, es6 refactor

import axios from 'axios';
import * as types from '../constants/actionTypes';
import { TMDB_URL, TMDB_API_KEY } from '../constants/api';
import { moviesMapper } from '../utils/movieMapperUtil';

/**
 * Get Now Playing Movies Success
 * @param response
 * @returns {{type: string, nowPlayingMovies: *}}
 */
export function getNowPlayingMoviesSuccess(response) {
  return {
    type: types.GET_NOW_PLAYING_MOVIES_SUCCESS,
    nowPlayingMovies: response
  };
}

/**
 * Get Now Playing Movies
 * @param page
 * @returns {function(*): Promise<AxiosResponse<any>>}
 */
export function getNowPlayingMovies(page) {
  return function(dispatch) {
    return axios
      .get(`${TMDB_URL}/movie/now_playing?api_key=${TMDB_API_KEY}&page=${page}`)
      .then(response => {
        const movies = moviesMapper(response.data.results);
        dispatch(getNowPlayingMoviesSuccess(movies));
      })
      .catch(error => {
        console.error('Movies - Now Playing:', error);
      });
  };
}

/**
 * Get Popular Movies Success
 * @param response
 * @returns {{type: string, popularMovies: *}}
 */
export function getPopularMoviesSuccess(response) {
  return {
    type: types.GET_POPULAR_MOVIES_SUCCESS,
    popularMovies: response
  };
}

/**
 * Get Popular Movies
 * @param page
 * @returns {function(*): Promise<AxiosResponse<any>>}
 */
export function getPopularMovies(page) {
  return function(dispatch) {
    return axios
      .get(`${TMDB_URL}/movie/popular?api_key=${TMDB_API_KEY}&page=${page}`)
      .then(response => {
        const movies = moviesMapper(response.data.results);
        dispatch(getPopularMoviesSuccess(movies));
      })
      .catch(error => {
        console.error('Movies - Popular:', error);
      });
  };
}

/**
 * Get Top Rated Movies Success
 * @param response
 * @returns {{type: *, topRatedMovies: *}}
 */
export function getTopRatedMoviesSuccess(response) {
  return {
    type: types.GET_TOP_RATED_MOVIES_SUCCESS,
    topRatedMovies: response
  };
}

/**
 * Get Top Rated Movies
 * @param page
 * @returns {function(*): Promise<AxiosResponse<any>>}
 */
export function getTopRatedMovies(page) {
  return function(dispatch) {
    return axios
      .get(`${TMDB_URL}/movie/top_rated?api_key=${TMDB_API_KEY}&page=${page}`)
      .then(response => {
        const movies = moviesMapper(response.data.results);
        dispatch(getTopRatedMoviesSuccess(movies));
      })
      .catch(error => {
        console.error('Movies - Top Rated:', error);
      });
  };
}

/**
 * Get Upcoming Movies Success
 * @param response
 * @returns {{type: *, upcomingMovies: *}}
 */
export function getUpcomingMoviesSuccess(response) {
  return {
    type: types.GET_UPCOMING_MOVIES_SUCCESS,
    upcomingMovies: response
  };
}

/**
 * Get Upcoming Movies
 * @param page
 * @returns {function(*): Promise<AxiosResponse<any>>}
 */
export function getUpcomingMovies(page) {
  return function(dispatch) {
    return axios
      .get(`${TMDB_URL}/movie/upcoming?api_key=${TMDB_API_KEY}&page=${page}`)
      .then(response => {
        const movies = moviesMapper(response.data.results);
        dispatch(getUpcomingMoviesSuccess(movies));
      })
      .catch(error => {
        console.error('Movies - Upcoming:', error);
      });
  };
}

// export async function getMoviesNowPlaying() {
//   try {
//     let response = await fetch(
//       'https://api.themoviedb.org/3/movie/now_playing?api_key=b2145ee174bd97f752ba4aa4b0d715d5'
//     );
//     let responseJson = await response.json();
//     console.log('>>>>>', responseJson.results);
//     return responseJson.results;
//   } catch (error) {
//     console.error(error);
//   }
// }

// GENRES
// export function getMoviesGenresSuccess(res) {
//   return {
//     type: types.GET_MOVIES_GENRES_SUCCESS,
//     moviesGenres: res.data
//   };
// }
//
// export function getMoviesGenres() {
//   return function(dispatch) {
//     return axios
//       .get(`${TMDB_URL}/genre/movie/list?api_key=${TMDB_API_KEY}`)
//       .then(res => {
//         dispatch(getMoviesGenresSuccess(res));
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   };
// }

// MOVIE DETAILS
// export function getMovieDetailsSuccess(res) {
//   return {
//     type: types.GET_MOVIE_DETAILS_SUCCESS,
//     details: res.data
//   };
// }
//
// export function getMovieDetails(movieId) {
//   return function(dispatch) {
//     return axios
//         .get(`${TMDB_URL}/movie/${movieId}?api_key=${TMDB_API_KEY}&append_to_response=casts,images,videos`)
//         .then(res => {
//           dispatch(getMovieDetailsSuccess(res));
//         })
//         .catch(error => {
//           console.log('Movie Details', error);
//         });
//   };
// }

// SEARCH RESULTS
// export function getMoviesSearchResultsSuccess(res) {
//   return {
//     type: types.GET_MOVIES_SEARCH_RESULT_SUCCESS,
//     searchResults: res.data
//   };
// }
//
// export function getMoviesSearchResults(query, page) {
//   return function(dispatch) {
//     return axios
//         .get(`${TMDB_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${query}&page=${page}`)
//         .then(res => {
//           dispatch(getMoviesSearchResultsSuccess(res));
//         })
//         .catch(error => {
//           console.log('Movies Search Results', error);
//         });
//   };
// }

// MOVIES LIST
// export function getMoviesListSuccess(response) {
//   return {
//     type: types.GET_MOVIES_LIST_SUCCESS,
//     list: response.data
//   };
// }
//
// export function getMoviesList(type, page) {
//   return function(dispatch) {
//     return axios
//         .get(`${TMDB_URL}/movie/${type}?api_key=${TMDB_API_KEY}&page=${page}`)
//         .then(res => {
//           dispatch(getMoviesListSuccess(res));
//         })
//         .catch(error => {
//           console.log('Movies List', error);
//         });
//   };
// }
