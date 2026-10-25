import { StyleSheet } from "react-native"
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Constants from "../Constants/Colors";
import Colors from "../Constants/Colors";
import React from "react";
import { Dimensions } from "react-native";
import { color, set } from "react-native-reanimated";

const { height, width } = Dimensions.get("window");

const setHeight = (h) => (height / 100) * h;
const setWidth = (w) => (width / 100) * w;

const maxTitleWidth = width * 0.3;
const fontSize = Math.min(30, maxTitleWidth / 10);

export default StyleSheet.create( {

    //App
    mainHeaderStyle:{
        title: "Movies",
        headerStyle: { backgroundColor: Colors.red },
        headerTitleStyle: { color: Constants.black },
    },
    showsHeaderStyle:{
        title: "TV Shows",
        headerStyle: { backgroundColor: Colors.red },
        headerTitleStyle: { color: Constants.black },
    },
    detailsHeaderStyle:{
        title:"Details",
        headerStyle: { backgroundColor: Constants.black },
        headerTitleStyle: { color: Constants.white },
    },
    favoritesHeaderStyle:{
        title:"Favorites",
        headerStyle: { backgroundColor: Constants.red },
        headerTitleStyle: { color: Constants.black },
    },
    ratingHeaderStyle:{
        title:"Rated",
        headerStyle: { backgroundColor: Constants.red },
        headerTitleStyle: { color: Constants.black },
    },
    loginHeaderStyle:{
        title:"Login",
        headerStyle: { backgroundColor: Constants.red },
        headerTitleStyle: { color: Constants.black },
    },


    //Details
    homeContainer: {
        flex: 0,
        backgroundColor: Colors.black,
        flexGrow: 1,
    },
    homeBoxesContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: Colors.black,
    },
    homeItemsTitle: {
        fontSize: 26,
        color: Colors.gold,
    },


    //Movie/Show Details
    detailsContainer: {
        flex: 1,
        backgroundColor: Colors.black
    },
    imageContainer: {
        height: 250,
        width: 180,
        borderWidth: 0,
        top: -100,
        left: 16,
        elevation: 0,
        marginVertical: 2,
    },
    searchImageContainer: {
        height: 200,
        width: 150,
        borderWidth: 0,
        elevation: 0,
        marginVertical: 2,
    },
    logoContainer: {
        height: 100,
        width: 100,
        borderWidth: 0,
        top: 20,
        marginVertical: 2,
    },
    movieSubtitleContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    moviePosterContainer: {
        height: setHeight(35),
        width: setWidth(100),
        alignItems: "center",
        top: 4,
        elevation: 8,
    },
    movieDetailsPosterImage: {
        height: setHeight(35),
        width: setWidth(100),
        opacity:0.8
    },
    titleStyle:{
        backgroundColor: Colors.black,
        color: Colors.gold,
        fontFamily: 'rajdhani',
        textAlign: 'left',
        left:8 ,
        fontSize: 30,
        top: 8,
        borderRadius: 20,
    },
    playButton: {
        position: "absolute",
        alignSelf: "center",
        top:86
    },
    subtitleStyle:{
        backgroundColor: Colors.black,
        color: Colors.gold,
        textAlign: 'left',
        left:8 ,
        fontSize: 18,
        top: 8,
        borderRadius: 20,
    },
    MiniatureTextStyle:{
        backgroundColor: Colors.black,
        color: Colors.gold,
        textAlign: 'left',
        left:8 ,
        fontSize: 18,
        borderRadius: 20,
        width: setWidth(50),
    },
    overviewContainer: {
        top: -100,
        backgroundColor: Colors.black,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 10,
    },
    WTWContainer: {
        top: -100,
        backgroundColor: Colors.black,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 10,
        flexDirection: 'column',
    },
    overviewTitle: {
        color: Colors.gold,
        fontSize: 18,
    },


    //MovieCard
    MovieCardContainer: {
        height: 280,
        width: 200,
        borderWidth: 0,
        elevation: 0,
        marginVertical: 5,
    },
    movieCardTitle: {
        fontSize: fontSize,
        color: Colors.gold,
    },
    movieCardSubtitleContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    RatingContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    StarContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    cardHeaderTitle: {
        fontSize: 13,
        color: Colors.gold,
    },


    //ShowCard
    ShowCardContainer: {
        height: 280,
        width: 200,
        borderWidth: 0,
        elevation: 0,
        marginVertical: 5,
    },
    showCardTitle: {
        fontSize: fontSize,
        color: Colors.gold,
    },
    showCardSubtitleContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    showCardHeaderTitle: {
        fontSize: 13,
        color: Colors.gold,
    },


    //Search
    searchHeader:{
        title: "Search",
        alignSelf:'center',
        headerStyle: { backgroundColor: Constants.violet },
        headerTitleStyle: { color: Constants.black },
    },
    textInputStyle:{
        height:setHeight(8),
        borderWidth:5,
        paddingLeft:20,
        margin:10,
        borderColor: Colors.black,
        backgroundColor:Colors.light_gray,
        borderRadius:40,
        fontSize:20
    },


    //RatingBar Styles
    ratingBarStyle:{
        backgroundColor:Colors.black,
        top: setHeight(35),
        width:setWidth(90),
        height:setHeight(35),
        alignItems:'center',
        alignSelf:'center',
        alignContent:'center',
        borderRadius:50,
        padding:setHeight(5)
    },
    rateButtonStyle:{
        height:40,
        top:10,
        backgroundColor:Colors.black,
    },


    //login
    loginContainer:{
        flex: 0,
        backgroundColor: Colors.black,
        flexGrow: 1,
    },
    loginWarningStyle:{
        top:setHeight(5),
        textAlign: 'center',
        color:Colors.gold,
        fontSize:25
    },
    loginButtonStyle:{
        backgroundColor:Colors.gold,
        width:setWidth(50),
        alignSelf:'center',
        borderRadius:30,
    },
    loginTextStyle:{
        color:Colors.black,
        fontSize:30,
        textAlign: 'center',
    },
    registerStyle:{
        color:Colors.gold
    },
    registerButtonStyle:{
        color:Colors.white
    }
});
