// @flow
import { Movie } from '../types';

export function moviesMapper(movieData: Array<Movie>) {
  return movieData.map((movie: Movie) => {
    return new Movie(
      movie.vote_count,
      movie.id,
      movie.vote_average,
      movie.popularity,
      movie.poster_path,
      movie.original_language,
      movie.genre_ids,
      movie.backdrop_path,
      movie.overview,
      movie.video,
      movie.title,
      movie.original_title,
      movie.adult,
      movie.release_date
    );
  });
}
