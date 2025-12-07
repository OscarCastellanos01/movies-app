import { MovieDBMvoiesResponse } from '@/infrastructure/interfaces/moviedb-response';
import { MovieMapper } from '@/infrastructure/mappers/movie.mappers';
import { movieApi } from '../../api/movie-api';

interface Options {
  page?: number;
  limit?: number;
}

export const topRatedAction = async ({ page = 1, limit = 10 }: Options) => {
  try {
    const { data } = await movieApi.get<MovieDBMvoiesResponse>("/top_rated", {
      params: {
        page: page,
      },
    });
    const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);
    return movies;
  } catch (error) {
    console.log(error);
    throw "Cannot load now top rated movies.";
  }
};