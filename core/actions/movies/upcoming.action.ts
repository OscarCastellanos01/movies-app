import { MovieDBMvoiesResponse } from '@/infrastructure/interfaces/moviedb-response';
import { MovieMapper } from '@/infrastructure/mappers/movie.mappers';
import { movieApi } from '../../api/movie-api';

export const upcomingAction = async () => {
  try {
    const { data } = await movieApi.get<MovieDBMvoiesResponse>("/upcoming");
    const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);
    return movies;
  } catch (error) {
    console.log(error);
    throw "Cannot load upcoming movies.";
  }
};