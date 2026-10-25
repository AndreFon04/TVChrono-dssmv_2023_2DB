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
import { getPoster } from "../Services/MovieServices";
import { getShowPoster } from "../Services/ShowServices"
import Styles from "../Styles/Styles";

const MovieCard = ({
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
        style={Styles.MovieCardContainer}
        imageStyle={{ borderRadius: 10 }}
        source={{ uri: getPoster(poster) }}>
      </ImageBackground>
      <View>
        <Text style={Styles.movieCardTitle}>{truncatedTitle}</Text>
        <View style={Styles.movieCardSubtitleContainer}>
          <View style={Styles.StarContainer}>
            <Ionicons name="star" size={17} color={Colors.yellow} />
            <Text style={Styles.cardHeaderTitle}>{voteAverage.toFixed(1)}</Text>
          </View>
          <Text style={Styles.cardHeaderTitle}>{language}</Text>
          <View style={Styles.RatingContainer}>
            <Ionicons name="heart" size={17} color={Colors.heart_red} />
            <Text style={Styles.cardHeaderTitle}>{voteCount}</Text>
          </View>

        </View>
      </View>
    </View>
    </TouchableOpacity>
  );
};
export default MovieCard;
