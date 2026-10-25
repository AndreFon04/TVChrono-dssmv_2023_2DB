import React, { useContext, useEffect, useState } from "react";
import {View, Text, ScrollView, Image, TouchableOpacity, Modal, Alert, Button, Linking} from "react-native";
import { StatusBar } from "expo-status-bar";
import { getMovieDetailsById, getMovieProviders, getPoster, defineTrailerURL, addToRated, addOrRemoveFromFav } from "../Services/MovieServices";
import { APPEND_TO_RESPONSE as extraInfo } from "../Constants/Urls";
import Colors from "../Constants/Colors";
import ItemSeparator from "../Components/ItemSeparator";
import { Feather, Ionicons } from "@expo/vector-icons";
import Styles from "../Styles/Styles";
import { AuthContext } from "../Context/AuthContext";
import { Rating } from 'react-native-ratings';

const Details = ({ route, navigation }) => {
    const { movieId } = route.params;
    const [visRating, toggleVisRating] = useState(false);
    const [rateValue, setRateValue] = useState({});
    const [movDetails, setMovDetails] = useState({});
    const [providers, setProviders] = useState({});
    const { sessId } = useContext(AuthContext);
    const providerName = providers?.results?.PT?.flatrate && providers.results.PT.flatrate[0].provider_name;
    const providerLogo = providers?.results?.PT?.flatrate && providers.results.PT.flatrate[0].logo_path;

    useEffect(() => {
        getMovieDetailsById(movieId, `${extraInfo.TRAILER}`).then((response) => setMovDetails(response?.data));
        getMovieProviders(movieId).then((provResponse) => setProviders(provResponse?.data));
    }, []);

    return (
        <ScrollView style={Styles.detailsContainer} showsVerticalScrollIndicator={false}>
            <StatusBar style="auto" />

            <Text style={Styles.titleStyle}>
                {movDetails.original_title}
            </Text>

            <Text style={Styles.subtitleStyle}>
                {movDetails?.original_language?.toUpperCase()} - {movDetails.release_date} - {movDetails.runtime} mins
            </Text>
            <ItemSeparator height={10} />

            <Modal visible={visRating} transparent={true}>
                <View style={{ backgroundColor: "#000000aa", flex: 1 }}>
                    <View style={Styles.ratingBarStyle}>
                        <Rating
                            type='custom'
                            ratingCount={10}
                            imageSize={30}
                            showRating
                            startingValue={5}
                            tintColor={Colors.light_black}
                            onFinishRating={value => { setRateValue(value) }}
                        />
                        <ItemSeparator height={10} />
                        <Button style={Styles.rateButtonStyle} color={Colors.yellow} title={`Rate as :${rateValue}`} onPress={() => { toggleVisRating(!visRating), addToRated(sessId, movieId, rateValue) }} />
                        <ItemSeparator height={10} />
                        <Button style={Styles.rateButtonStyle} color={Colors.yellow} title="Cancel" onPress={() => { toggleVisRating(!visRating) }} />
                    </View>
                </View>
            </Modal>

            <View style={Styles.moviePosterContainer}>
                <Image style={Styles.movieDetailsPosterImage} resizeMode="cover"
                       source={{ uri: getPoster(movDetails?.backdrop_path) }} />
                <TouchableOpacity
                    style={Styles.playButton}
                    onPress={() =>
                        Linking.openURL(defineTrailerURL(movDetails.videos.results))}>
                    <Feather name="play-circle" size={70} color={Colors.black} style={{ opacity: 0.8 }} />
                </TouchableOpacity>
            </View>
            <ItemSeparator height={20} />

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: Colors.white, marginBottom: 10 }}>Rate This Movie</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => { if (sessId !== null) { toggleVisRating(!visRating); } else { Alert.alert('Not logged in', 'You must log in to access this feature'); } }}>
                            <Ionicons name={"star"} size={30} color={Colors.yellow} style={{ marginRight: 5 }} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 18, color: Colors.white }}>{movDetails.vote_average?.toFixed(1)}</Text>
                    </View>
                </View>

                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: Colors.white, marginBottom: 10 }}>Favorite This Movie</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => { if (sessId !== null) { addOrRemoveFromFav(sessId, movieId, true).then(Alert.alert('Favorites', 'This movie was added to Favorites')) } else { Alert.alert('Not logged in', 'You must log in to access this feature'); } }}>
                            <Ionicons name={"heart"} size={30} color={Colors.heart_red} style={{ marginRight: 5 }} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 18, color: Colors.white }}>{movDetails.vote_count}</Text>
                    </View>
                </View>
            </View>

            <ItemSeparator height={20} />

            <View style={Styles.overviewContainer}>
                <Text style={Styles.overviewTitle}>Overview</Text>
                <Text style={Styles.subtitleStyle}>{movDetails.overview}</Text>
            </View>

            <View style={Styles.overviewContainer}>
                <Text style={Styles.overviewTitle}>Where To Watch</Text>
                <Text style={Styles.subtitleStyle}>{providerName}</Text>
                <Image
                    style={Styles.logoContainer}
                    source={{ uri: getPoster(providerLogo) }}>
                </Image>
            </View>

        </ScrollView>
    );
};

export default Details;
