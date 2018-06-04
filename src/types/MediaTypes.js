// @flow
import { TMDB_IMG_URL } from '../constants/api';

export class Media {
  vote_count: number;
  id: number;
  vote_average: number;
  popularity: number;
  poster_path: string;
  original_language: string;
  genre_ids: Array<number>;
  backdrop_path: string;
  overview: string;

  constructor(
    vote_count: number,
    id: number,
    vote_average: number,
    popularity: number,
    poster_path: string,
    original_language: string,
    genre_ids: Array<number>,
    backdrop_path: string,
    overview: string
  ) {
    this.vote_count = vote_count;
    this.id = id;
    this.vote_average = vote_average;
    this.popularity = popularity;
    this.poster_path = `${TMDB_IMG_URL}/w342/${poster_path}`;
    this.original_language = original_language;
    this.genre_ids = genre_ids;
    this.backdrop_path = `${TMDB_IMG_URL}/w500/${backdrop_path}`;
    this.overview = overview;
  }
}
