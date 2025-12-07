import { CastMovie } from "@/infrastructure/interfaces/movie.interface";
import {
    FlatList,
    Text,
    View
} from "react-native";
import { ActorCard } from './ActorCard';

interface Props {
  actor: CastMovie[];
  className?: string;
}

const MovieCast = ({
  actor,
  className
}: Props) => {

  return (
    <View className={`mt-5 mb-20 ${className}`}>
      <Text className="text-3xl font-bold px-4 mb-2">Actores</Text>
      
      <FlatList
        horizontal
        data={actor}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, i) => `${item.id}-${i}`}
        renderItem={({ item }) => <ActorCard actor={item} />}
      />
    </View>
  );
};

export default MovieCast;
