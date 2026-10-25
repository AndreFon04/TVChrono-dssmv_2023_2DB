const axios = require("axios").default;

import {
    TMDB_API_KEY,
    TMDB_BASE_URL,
    TMDB_IMAGE_URL,
    ENDPOINTS,
    YT_BASE_URL,
} from "../Constants/Urls";

const TMBD_INITIAL_SHOWS_URL = axios.create({
    baseURL: TMDB_BASE_URL,
    params: {
        api_key: TMDB_API_KEY,
    },
});


const getNowPlayingShows = () =>
    TMBD_INITIAL_SHOWS_URL.get(ENDPOINTS.NOW_PLAYING_SHOWS);

const getTopRatedShows = () =>
    TMBD_INITIAL_SHOWS_URL.get(ENDPOINTS.TOP_RATED_SHOWS);

const getUpcomingShows = () =>
    TMBD_INITIAL_SHOWS_URL.get(ENDPOINTS.UPCOMING_SHOWS);

const getPopularShows = () =>
    TMBD_INITIAL_SHOWS_URL.get(ENDPOINTS.POPULAR_SHOWS);

const getShowPoster = (path) => `${TMDB_IMAGE_URL}/original${path}`;

const getShowDetailsById = (seriesId, append_to_response = "") =>
    TMBD_INITIAL_SHOWS_URL.get(`${ENDPOINTS.SHOW}/${seriesId}`, append_to_response ? { params: { append_to_response } } :null);

const getShowProviders = (seriesId)=>
    TMBD_INITIAL_SHOWS_URL.get(`${ENDPOINTS.SHOW}/${seriesId}/watch/providers`);

const defineShowTrailerURL = (json)=>
    `${YT_BASE_URL}${findTrailerKey(json)}`;

function findTrailerKey(json)
{
    for(let i=0; i<json.length; i++)
    {
        if (json[i].type === "Trailer")
        {
            return json[i].key;
        }
    }
    return null;
}

const getSeriesRatedList=(sessionId)=>
    axios.get(`https://api.themoviedb.org/3/account/%7Baccount_id%7D/rated/tv?api_key=${TMDB_API_KEY}&session_id=${sessionId}&sort_by=created_at.asc`);

const addSeriesToRated =(sessionId, seriesId, rateValue)=>
    axios.post(`https://api.themoviedb.org/3/tv/${seriesId}/rating?api_key=${TMDB_API_KEY}&session_id=${sessionId}`,
        {
            value: rateValue
        });

const removeSeriesFromRated =(sessionId, seriesId)=>
    axios.delete(`https://api.themoviedb.org/3/tv/${seriesId}/rating?api_key=${TMDB_API_KEY}&session_id=${sessionId}`);

const addOrRemoveSeriesFromFav=(sessionId,seriesId,whatToDo)=>
    axios.post(`https://api.themoviedb.org/3/account/{account_id}/favorite?api_key=${TMDB_API_KEY}&session_id=${sessionId}`,
        {
            media_type: 'show',
            media_id: seriesId,
            favorite: whatToDo
        });

const getFavSeries=(sessionId)=>
    axios.get(`https://api.themoviedb.org/3/account/{account_id}/favorite/tv?api_key=${TMDB_API_KEY}&session_id=${sessionId}&sort_by=created_at.asc`)

export {getNowPlayingShows, getTopRatedShows, getUpcomingShows, getPopularShows,
        getShowPoster, getShowDetailsById, getShowProviders, getSeriesRatedList,defineShowTrailerURL,
        addSeriesToRated, removeSeriesFromRated, addOrRemoveSeriesFromFav, getFavSeries};
