# TVChrono

An iOS app, written in React Native (Expo) to browse movies and TV shows, favourite them and rate them. It gets its data from **TMDB API** to display each movie/show.

Developed in 2023 for the **DSSMV** course of the BSc in Telecommunications and Informatics Engineering at **ISEP** (Instituto Superior de Engenharia do Porto) by **André Fonseca** and **Diogo Martins**.

### Features
- Movies and TV shows organised in Popular, Top Rated, Now Playing and Upcoming sections
- Search by title
- Details with poster image, title, release date, overview, TMDB rating and where to watch
- For TV shows: seasons and the number of episodes
- Sign-in with a TMDB account to unlock the actions below
- Favourites list
- Rate each movie or show

### Tech stack
- React Native 0.70 with Expo SDK 47
- React Navigation (stack, bottom tabs and drawer navigators)
- Axios for REST API requests
- AsyncStorage for local data

### Web service
The app gets all its movie and TV show data from the **TMDB API**, and sign-in uses a TMDB account. The requests are made in src/Services. A free TMDB API key is needed to run it.

### Getting started
Prerequisites: Node.js, the Expo Go app or an iOS simulator, and a free TMDB API key (request one in your TMDB account settings).
```bash
git clone https://github.com/AndreFon04/TVChrono-dssmv_2023_2DB.git
cd TVChrono-dssmv_2023_2DB
npm install
```
Add your TMDB API key in src/Constants/Urls.js, then start the app:
```bash
npm start
```

### Credits
This product uses the **TMDB API** but is not endorsed or certified by TMDB. Where-to-watch data is provided by **JustWatch**.
