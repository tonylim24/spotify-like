// A reducer file to work with Data Layer (React Context API)

// Initial State of the state that we get from Spotify API (or highest ancestor)
export const initialState = {
    user: null,
    playlists: [],
    discover_weekly: [],
    featured_playlist: [],
    selected_playlist: "",
    tracks: [],
    playing: false,
    item: null,
};

// Set Up Reducer that will listen to action and perform the necessary.
// Essentially the reducer is a state action listener.
// The action list is set on the case statement
const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists, 
            }
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly, 
            }
        case 'SET_FEATURED_PLAYLIST':
            return {
                ...state,
                featured_playlist: action.featured_playlist, 
            }
        case 'SET_SELECTED_PLAYLIST':
            return {
                ...state,
                selected_playlist: action.selected_playlist, 
            }
        case 'SET_TRACKS':
            return {
                ...state,
                tracks: action.tracks, 
            }
        default: 
            return state; //Return current state if no action is performed by the reducer.
    }
}

export default reducer;