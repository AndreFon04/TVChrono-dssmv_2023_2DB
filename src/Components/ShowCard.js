import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
} from "react-native";
import Colors from "../Constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { getShowPoster } from "../Services/ShowServices"
import Styles from "../Styles/Styles";

const ShowCard = ({
title,
poster,
language,
voteAverage,
voteCount,
onPress,
}) => {
    const maxChars = 38;
    const truncatedTitle = title.length > maxChars ? title.substring(0, maxChars) + '...' : title;

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{flexDirection: 'column'}}>
                <ImageBackground
                    style={Styles.ShowCardContainer}
                    imageStyle={{ borderRadius: 10 }}
                    source={{ uri: getShowPoster(poster) }}>
                </ImageBackground>
                <View>
                    <Text style={Styles.showCardTitle}>{truncatedTitle}</Text>
                    <View style={Styles.showCardSubtitleContainer}>
                        <View style={Styles.StarContainer}>
                            <Ionicons name="star" size={17} color={Colors.yellow} />
                            <Text style={Styles.showCardHeaderTitle}>{voteAverage.toFixed(1)}</Text>
                        </View>
                        <Text style={Styles.showCardHeaderTitle}>{language}</Text>
                        <View style={Styles.RatingContainer}>
                            <Ionicons name="heart" size={17} color={Colors.heart_red} />
                            <Text style={Styles.showCardHeaderTitle}>{voteCount}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};
export default ShowCard;
