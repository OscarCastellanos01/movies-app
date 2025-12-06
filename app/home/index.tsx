import { ActivityIndicator, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import MainSlideshow from '@/presentation/components/movies/MainSlideshow';
import MovieHorizontalList from '@/presentation/components/movies/MovieHorizontalList';
import { useMovies } from '@/presentation/hooks/useMovies';

const HomeScreen = () => {
    const safeArea = useSafeAreaInsets();
    const { nowPlayingQuery, popularQuery } = useMovies();

    if (nowPlayingQuery.isLoading) {
      return (
        <View className='justify-center items-center flex-1'>
          <ActivityIndicator color="purple" size={40}/>
        </View>
      )
    }

    return (
      <View className="mt-5" style={{ paddingTop: safeArea.top }}>
        <Text className="text-3xl font-bold px-4 mb-2">MoviesApp</Text>
        {/* Carousel de imagenes */}
        <MainSlideshow movies={nowPlayingQuery.data ?? []} />
        {/* Popular */}
        <MovieHorizontalList title='Populares' movies={popularQuery.data ?? []} />
      </View>
    );
}

export default HomeScreen