import { MovieDBMvoiesResponse } from '@/infrastructure/interfaces/moviedb-response';
import { MovieMapper } from '@/infrastructure/mappers/movie.mappers';
import { movieApi } from '../../api/movie-api';

export const topRatedAction = async () => {
  try {
    const { data } = await movieApi.get<MovieDBMvoiesResponse>("/top_rated");
    const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);
    return movies;
  } catch (error) {
    console.log(error);
    throw "Cannot load now top rated movies.";
  }
};