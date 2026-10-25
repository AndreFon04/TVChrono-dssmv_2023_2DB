import React, { useContext, useEffect, useState } from "react";
import {View, Text, ScrollView, Image, TouchableOpacity, Modal, Alert, Button, Linking} from "react-native";
import { StatusBar } from "expo-status-bar";
import { getShowDetailsById, getShowProviders, getShowPoster, addSeriesToRated, addOrRemoveSeriesFromFav, defineShowTrailerURL } from "../Services/ShowServices"
import { APPEND_TO_RESPONSE as extraInfo } from "../Constants/Urls";
import Colors from "../Constants/Colors";
import ItemSeparator from "../Components/ItemSeparator";
import { Feather, Ionicons } from "@expo/vector-icons";
import Styles from "../Styles/Styles";
import { AuthContext } from "../Context/AuthContext";
import { Rating } from 'react-native-ratings';

const ShowDetails = ({ route, navigation }) => {
    const { seriesId } = route.params;
    const [visRating, toggleVisRating] = useState(false);
    const [rateValue, setRateValue] = useState({});
    const [showDetails, setShowDetails] = useState({});
    const [providers, setProviders] = useState({});
    const { sessId } = useContext(AuthContext);
    const providerName = providers?.results?.PT?.flatrate && providers.results.PT.flatrate[0].provider_name;
    const providerLogo = providers?.results?.PT?.flatrate && providers.results.PT.flatrate[0].logo_path;

    useEffect(() => {
        getShowDetailsById(seriesId, `${extraInfo.TRAILER}`).then((response) => setShowDetails(response?.data));
        getShowProviders(seriesId).then((provResponse) => setProviders(provResponse?.data));
    }, []);

    return (
        <ScrollView style={Styles.detailsContainer} showsVerticalScrollIndicator={false}>
            <StatusBar style="auto" />

            <Text style={Styles.titleStyle}>
                {showDetails.original_name}
            </Text>

            <Text style={Styles.subtitleStyle}>
                {showDetails?.original_language?.toUpperCase()} - {showDetails.first_air_date} - {showDetails.episode_run_time} mins
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
                        <Button style={Styles.rateButtonStyle} color={Colors.yellow} title={`Rate as :${rateValue}`} onPress={() => { toggleVisRating(!visRating), addSeriesToRated(sessId, seriesId, rateValue) }} />
                        <ItemSeparator height={10} />
                        <Button style={Styles.rateButtonStyle} color={Colors.yellow} title="Cancel" onPress={() => { toggleVisRating(!visRating) }} />
                    </View>
                </View>
            </Modal>

            <View style={Styles.moviePosterContainer}>
                <Image style={Styles.movieDetailsPosterImage} resizeMode="cover"
                       source={{ uri: getShowPoster(showDetails?.backdrop_path) }} />
                <TouchableOpacity
                    style={Styles.playButton}
                    onPress={() =>
                        Linking.openURL(defineShowTrailerURL(showDetails.videos.results))}>
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
                        <Text style={{ fontSize: 18, color: Colors.white }}>{showDetails.vote_average}</Text>
                    </View>
                </View>

                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: Colors.white, marginBottom: 10 }}>Favorite This Movie</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => { if (sessId !== null) { addOrRemoveSeriesFromFav(sessId, seriesId, true).then(Alert.alert('Favorites', 'This show was added to Favorites')) } else { Alert.alert('Not logged in', 'You must log in to access this feature'); } }}>
                            <Ionicons name={"heart"} size={30} color={Colors.heart_red} style={{ marginRight: 5 }} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 18, color: Colors.white }}>{showDetails.vote_count}</Text>
                    </View>
                </View>
            </View>

            <ItemSeparator height={20} />

            <View style={Styles.overviewContainer}>
                <Text style={Styles.overviewTitle}>Seasons</Text>
                <Text style={Styles.subtitleStyle}>{showDetails.number_of_seasons}</Text>
            </View>

            <View style={Styles.overviewContainer}>
                <Text style={Styles.overviewTitle}>Episodes</Text>
                <Text style={Styles.subtitleStyle}>{showDetails.number_of_episodes}</Text>
            </View>

            <View style={Styles.overviewContainer}>
                <Text style={Styles.overviewTitle}>Overview</Text>
                <Text style={Styles.subtitleStyle}>{showDetails.overview}</Text>
            </View>

            <View style={Styles.overviewContainer}>
                <Text style={Styles.overviewTitle}>Status</Text>
                <Text style={Styles.subtitleStyle}>{showDetails.status}</Text>
            </View>

            <View style={Styles.overviewContainer}>
                <Text style={Styles.overviewTitle}>ID</Text>
                <Text style={Styles.subtitleStyle}>{seriesId}</Text>
            </View>

            <View style={Styles.overviewContainer}>
                <Text style={Styles.overviewTitle}>Where To Watch</Text>
                <Text style={Styles.subtitleStyle}>{providerName}</Text>
                <Image
                    style={Styles.logoContainer}
                    source={{ uri: getShowPoster(providerLogo) }}>
                </Image>
            </View>

        </ScrollView>
    );
};

export default ShowDetails;
