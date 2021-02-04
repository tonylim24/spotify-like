// This file will handle things related to Spotify API
// https://developer.spotify.com/documentation/web-api/quick-start/

export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const clientId = "40d4674ffd7a42bea9b08280f879b17a";

// Scopes is Spotify's API Permission
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
    "playlist-read-private",
    "user-library-read",
];

// Once we try to login, we got url such as:
// http://localhost:3000/#access_token=...&token_type=Bearer&expires_in=3600
// We want only want ...

export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
        .reduce((initial, item) => {
            // #accessToken=...
            // Using split, we can separate #accessToken and ...
            // Split returns an array containing the split item.
            let parts = item.split('=');
            initial[parts[0]] = decodeURIComponent(parts[1]);

            return initial
        }, {});
}

// We have to pass space in text ('&20') to scopes.join
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;