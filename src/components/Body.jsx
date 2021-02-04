import React, { useEffect } from 'react';
import '../stylesheets/Body.css';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import { useDataLayerValue } from './DataLayer';
import SpotifyWebApi from "spotify-web-api-js";
import SongRow from './SongRow';

function Body() {
    const [{ selected_playlist, tracks }, dispatch] = useDataLayerValue();

    useEffect(() => {
        const spotify = new SpotifyWebApi();
        if (selected_playlist !== "") {
            spotify.getPlaylistTracks(selected_playlist, {'limit': 20})
            .then((tracks) => {
                dispatch({
                    type: 'SET_TRACKS',
                    tracks: tracks
                });
            })
            .catch();
        }
    }, [selected_playlist, dispatch])

    return (
        <div className="body">
            <div className="body__container">
                {/* <h2 className="body__container-title">Recently played</h2> */}
                <PlayCircleFilledIcon />
                <div className="body__container-songsList">
                    <div className="body__container-songsList-header">
                        <span className="fixed-width-header">#</span>
                        <span className="songsList-header-title">TITLE</span>
                        <span className="songsList-header-album">ALBUM</span>
                        <span className="songsList-header-dateAdded">DATE ADDED</span>
                        <span className="songsList-header-duration"><QueryBuilderIcon /></span>
                    </div>
                    <hr/>
                    <div className="body__container-songsList-content">
                        {selected_playlist === "" ? "Please Select Your Playlist." : ""}
                        {/* List of songs */}
                        {tracks?.items?.map((item, index) => (
                            <SongRow track={item.track} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body