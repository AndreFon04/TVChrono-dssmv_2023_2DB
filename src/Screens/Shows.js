import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList , TouchableOpacity} from "react-native";
import { StatusBar } from "expo-status-bar";
import Colors from "../Constants/Colors";
import ShowCard from "../Components/ShowCard"
import ItemSeparator from "../Components/ItemSeparator";
import {
    getNowPlayingShows,
    getPopularShows,
    getTopRatedShows,
    getUpcomingShows
} from "../Services/ShowServices"
import Styles from "../Styles/Styles";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../Context/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";


const Shows = () => {
    const [nowPlayingShows, setNowPlayingShows] = useState({}); // the empty {} define the default as an empty object
    const [topRatedShows, setTopRatedShows] = useState({});
    const [upcomingShows, setUpcomingShows] = useState({});
    const [popularShows, setPopularShows] = useState({});
    const {setSessId} = useContext(AuthContext);


    const navigation = useNavigation();
    useEffect(() => {

        AsyncStorage.getItem('savedSessId').then((sesId)=>{
            setSessId(sesId)
        });
        getNowPlayingShows().then((showResponse) =>
            setNowPlayingShows(showResponse.data)
        ),
        getUpcomingShows().then((showResponse) =>
            setUpcomingShows(showResponse.data)
        ),
        getTopRatedShows().then((showResponse) =>
            setTopRatedShows(showResponse.data)
        ),
        getPopularShows().then((showResponse) =>
            setPopularShows(showResponse.data)
        );
    }, [navigation]); // no dependencies on the useEffect, meaning this will only run once, to prevent infinite looping

    return (
        <ScrollView contentContainerStyle={Styles.homeContainer}>

            <StatusBar
                style="auto"
                translucent={false}
                backgroundColor={Colors.black}
            />

            <View style={Styles.homeBoxesContainer}>
                <Text style={Styles.homeItemsTitle}>Popular</Text>
            </View>
            <View>
                <FlatList
                    data={popularShows.results}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id.toString()}
                    ItemSeparatorComponent={() => <ItemSeparator width={20} />}
                    ListHeaderComponent={() => <ItemSeparator width={20} />}
                    ListFooterComponent={() => <ItemSeparator width={20} />}
                    renderItem={({ item }) => (
                        <ShowCard
                            title={item.original_name}
                            language={item.original_language}
                            voteAverage={item.vote_average}
                            voteCount={item.vote_count}
                            poster={item.poster_path}
                            onPress={() =>
                                navigation.navigate("ShowDetailsScreen", { seriesId: item.id })
                            }
                        />
                    )}
                />
            </View>

            <View style={Styles.homeBoxesContainer}>
                <Text style={Styles.homeItemsTitle}>Top Rated</Text>
            </View>
            <View>
                <FlatList
                    data={topRatedShows.results}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id.toString()}
                    ItemSeparatorComponent={() => <ItemSeparator width={18} />}
                    ListHeaderComponent={() => <ItemSeparator width={18} />}
                    ListFooterComponent={() => <ItemSeparator width={18} />}
                    renderItem={({ item }) => (
                        <ShowCard
                            title={item.original_name}
                            language={item.original_language}
                            voteAverage={item.vote_average}
                            voteCount={item.vote_count}
                            poster={item.poster_path}
                            onPress={() =>
                                navigation.navigate("ShowDetailsScreen", { seriesId: item.id })
                            }
                        />
                    )}
                />
            </View>

            <View style={Styles.homeBoxesContainer}>
                <Text style={Styles.homeItemsTitle}>Now Playing</Text>
            </View>
            <View>
                <FlatList
                    data={nowPlayingShows.results}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id.toString()}
                    ItemSeparatorComponent={() => <ItemSeparator width={18} />}
                    ListHeaderComponent={() => <ItemSeparator width={18} />}
                    ListFooterComponent={() => <ItemSeparator width={18} />}
                    renderItem={({ item }) => (
                        <ShowCard
                            title={item.original_name}
                            language={item.original_language}
                            voteAverage={item.vote_average}
                            voteCount={item.vote_count}
                            poster={item.poster_path}
                            onPress={() =>
                                navigation.navigate("ShowDetailsScreen", { seriesId: item.id })
                            }
                        />
                    )}
                />
            </View>

            <View style={Styles.homeBoxesContainer}>
                <Text style={Styles.homeItemsTitle}>Upcoming</Text>
            </View>
            <View>
                <FlatList
                    data={upcomingShows.results}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id.toString()}
                    ItemSeparatorComponent={() => <ItemSeparator width={20} />}
                    ListHeaderComponent={() => <ItemSeparator width={20} />}
                    ListFooterComponent={() => <ItemSeparator width={20} />}
                    renderItem={({ item }) => (
                        <ShowCard
                            title={item.original_name}
                            language={item.original_language}
                            voteAverage={item.vote_average}
                            voteCount={item.vote_count}
                            poster={item.poster_path}
                            onPress={() =>
                                navigation.navigate("ShowDetailsScreen", { seriesId: item.id })
                            }
                        />
                    )}
                />
            </View>
        </ScrollView>
    );
};

export default Shows;
