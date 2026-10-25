import React, { useEffect, useState } from "react"
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
import { View, Text } from "react-native";
import Styles from "../Styles/Styles";
import { getSearchedMovies } from "../Services/MovieServices";
import ItemSeparator from "../Components/ItemSeparator";
import MovieMiniature from "../Components/MovieMiniature";
import ShowMiniature from "../Components/ShowMiniature";


const Search = ({navigation}) =>{

    const [queryMovies, setQueryMovies] = useState({});

    return(
    <View style={Styles.homeContainer}>
        <View >
            <TextInput style={Styles.textInputStyle}
                        placeholder="search"
                        onEndEditing={input =>
                            {const movieInput = input.nativeEvent.text;
                                if(movieInput){
                                setQueryMovies(getSearchedMovies(movieInput).then((movieResponse)=>setQueryMovies(movieResponse.data)))}
                            }}/>
        </View>
        <View>
            <FlatList
                data={queryMovies.results}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                ItemSeparatorComponent={() => <ItemSeparator height={20} />}
                ListHeaderComponent={() => <ItemSeparator height={20} />}
                ListFooterComponent={() => <ItemSeparator height={20} />}
                renderItem={({ item }) => {
                    if (item.media_type === 'movie') {
                        return (
                            <MovieMiniature
                                title={item.original_title}
                                release_date={item.release_date}
                                voteAverage={item.vote_average.toFixed(1)}
                                poster={item.poster_path}
                                onPress={() =>
                                    navigation.navigate("DetailsScreen", { movieId: item.id })
                                }
                            />
                        );
                    } else if (item.media_type === 'tv') {
                        return (
                            <ShowMiniature
                                title={item.original_name}
                                release_date={item.first_air_date}
                                voteAverage={item.vote_average.toFixed(1)}
                                poster={item.poster_path}
                                onPress={() =>
                                    navigation.navigate("ShowDetailsScreen", { seriesId: item.id })
                                }
                            />
                        );
                    }
                }}
            />
      </View>

    </View>
    );
}

export default Search;
