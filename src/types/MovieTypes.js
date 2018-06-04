// @flow
import { Media } from './MediaTypes';

export class Movie extends Media {
  video: boolean;
  title: string;
  original_title: string;
  adult: boolean;
  release_date: string;

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
    video: boolean,
    title: string,
    original_title: string,
    adult: boolean,
    release_date: string
  ) {
    super(vote_count, id, vote_average, popularity, poster_path, original_language, genre_ids, backdrop_path, overview);
    this.video = video;
    this.title = title;
    this.original_title = original_title;
    this.adult = adult;
    this.release_date = release_date;
  }
}
