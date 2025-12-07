import { getMovieByIdAction } from '@/core/actions/movies/get-movie-by-id.action';
import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

const MovieScreen = () => {

    const { id } = useLocalSearchParams();

    getMovieByIdAction(+id);

  return (
    <View>
      <Text>MovieScreen</Text>
    </View>
  )
}

export default MovieScreen