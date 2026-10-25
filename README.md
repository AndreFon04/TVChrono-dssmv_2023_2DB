# TVChrono

An iOS app, written in React Native (Expo) to browse movies and TV shows. Includes authentication to be able to favourite or rate movies and shows. Uses a REST API to display each movie/show.

Developed in 2023 for the **DSSMV** course of the BSc in Telecommunications and Informatics Engineering at **ISEP** (Instituto Superior de Engenharia do Porto).

### Features
- Movies and TV shows with poster image, title, release date, overview and TMDB rating 
- For TV shows: seasons and the number of seasons and episodes
- User authentication
- Favourites list
- Rate each movie or show

### Tech stack
- React Native 0.70 with Expo SDK 47
- React Navigation (stack, bottom tabs and drawer navigators)
- Axios for REST API requests
- AsyncStorage for local data

### API
The app gets its movie and TV show data from TMDB API.
