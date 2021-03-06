import React, { useEffect } from 'react';
import Login from './Login';
import { getTokenFromUrl } from '../spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

// Global super variable
const spotify = new SpotifyWebApi();

function Main() {
    // const [token, setToken] = useState(null);
    // Using the DataLayer here. We need a dispatch here to pop into the DataLayer
    const[{token, selected_playlist}, dispatch] = useDataLayerValue();

    // Get the token from URL from Spotify API
    useEffect(() => {
        const hash = getTokenFromUrl();
        // We want to hide the access token from the URL
        window.location.hash = "";

        const _token = hash.access_token;
        if (_token){
            // setToken(_token);
            dispatch({
                type: 'SET_TOKEN',
                token: _token
            });

            // Giving the access token to the SpotifyWebApi class
            spotify.setAccessToken(_token);
            spotify.getMe().then(user => {
                // console.log('User:', user);

                dispatch({
                    type: 'SET_USER',
                    user: user
                })
            });

            spotify.getUserPlaylists().then((playlists) => {
                dispatch({
                    type: 'SET_PLAYLISTS',
                    playlists: playlists,
                });
            });

            const getFeaturedPlaylistsOptions = {
                "limit": 6,
            }

            spotify.getFeaturedPlaylists(getFeaturedPlaylistsOptions).then((featured_playlist) => {
                dispatch({
                    type: 'SET_FEATURED_PLAYLIST',
                    featured_playlist: featured_playlist,
                });
            });

            spotify.getPlaylistTracks(selected_playlist, {"limit": 20})
                .then((tracks) => {
                    dispatch({
                        type: 'SET_TRACKS',
                        tracks: tracks,
                    });
                }).catch(error => console.log(error));


            // console.log(spotify);
        }
    },);

    // console.log('token:', token);

    return (
        <div>
            {/* {} is <script> in JSX */}
            {
                // If we have a token from Spotify API login then return
                token ? (
                    <Player spotify={spotify} />
                ) : (
                    // If token is not obtained, then return Login page
                    <Login />
                )
            }
        </div>
    )
}

export default Main
