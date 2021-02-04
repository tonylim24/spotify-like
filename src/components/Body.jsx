import React, { useState } from 'react';
import '../stylesheets/Body.css';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import { useDataLayerValue } from './DataLayer';

function Body({ playlist }) {
    // const[{ playlists }, reducer] = useDataLayerValue();
    // console.log(playlists);
    const [playlistId, setPlaylistId] = useState("");

    return (
        <div className="body">
            <div className="body__container">
                {/* <h2 className="body__container-title">Recently played</h2> */}
                <PlayCircleFilledIcon />
                <div className="body__container-songsList">
                    <div className="body__container-songsList-header">
                        <span class="fixed-width-header">#</span>
                        <span>TITLE</span>
                        <span>ALBUM</span>
                        <span>DATE ADDED</span>
                        <span><QueryBuilderIcon /></span>
                    </div>
                    <hr/>
                    <div className="body__container-songsList-content">
                        {/* List of songs */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body

// https://www.youtube.com/watch?v=pnkuI8KXW_8
// 3:35:50
