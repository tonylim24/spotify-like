// A reducer file to work with Data Layer (React Context API)

// Initial State of the state that we get from Spotify API (or highest ancestor)
export const initialState = {
    user: null,
    playlists: [],
    discover_weekly: [],
    featured_playlist: [],
    playing: false,
    item: null,
    // Disable token defualt on production, this only helps us so we do not have to login all the time.
    // token: "BQCe5CHQsT7Tir91h72LaHEMtbiV6Yu6UrJOdNUlfVbq6Umu8f-SNqjGS0GSZNu3k8v5ihxRY4raUmvRR5Pw1QFt0UYT0a57wvRrpCAa3TrBgKLCF21TQ8Ws3O5OOxdWk8yR0leanVUlUnsEJgWYNNchY3ROgEeqQdh7Wtm-YWFiJxRe2SjfiF14Vqhe_lU"
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
        default: 
            return state; //Return current state if no action is performed by the reducer.
    }
}

export default reducer;