import { movieApi } from "@/core/api/movie-api";
import { CastMovie } from "@/infrastructure/interfaces/movie.interface";
import { CreditsResponse } from "@/infrastructure/interfaces/moviedb-credits.response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mappers";

export const getMoviesCastAction = async (movieId: number): Promise<CastMovie[]> => {
    try {
        const { data } = await movieApi.get<CreditsResponse>(`${movieId}/credits`);

        const casts = data.cast.map(MovieMapper.fromMovieDBCastToEntity);

        return casts;
    } catch (error) {
        console.log(error);
        throw "Cannot load cast.";
    }
}