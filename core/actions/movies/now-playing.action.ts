import { MovieDBMvoiesResponse } from '@/infrastructure/interfaces/moviedb-response';
import { MovieMapper } from '@/infrastructure/mappers/movie.mappers';
import { movieApi } from '../../api/movie-api';
export const nowPlayingAction = async() => {
    try {
        const { data } = await movieApi.get<MovieDBMvoiesResponse>("/now_playing");
        // console.log(JSON.stringify(data,null,2));
        // const movies = data.results.map((movie) => MovieMapper.fromTheMovieDBToMovie(movie));
        const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);
        // console.log(movies);
        return movies
    } catch (error) {
        console.log(error);
        throw 'Cannot load now playing movies.'
    }
}