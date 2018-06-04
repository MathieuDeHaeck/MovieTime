// @flow
import { Media } from './MediaTypes';

export class TvShow extends Media {
  original_name: string;
  name: string;
  vote_count: number;
  vote_average: number;
  first_air_date: string;
  origin_country: Array<string>;

  constructor(
    vote_count: number,
    id: number,
    vote_average: number,
    popularity: number,
    poster_path: string,
    original_language: string,
    genre_ids: Array<number>,
    backdrop_path: string,
    overview: string,
    original_name: string,
    name: string,
    first_air_date: string,
    origin_country: Array<string>
  ) {
    super(vote_count, id, vote_average, popularity, poster_path, original_language, genre_ids, backdrop_path, overview);
    this.original_name = original_name;
    this.name = name;
    this.vote_count = vote_count;
    this.vote_average = vote_average;
    this.first_air_date = first_air_date;
    this.origin_country = origin_country;
  }
}
