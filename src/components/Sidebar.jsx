import React, { useEffect } from 'react';
import '../stylesheets/Sidebar.css';
import spotifyLogo from '../images/Spotify_Logo_RGB_White.png';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from "./DataLayer";

function Sidebar() {
    const[{ playlists }, dispatch] = useDataLayerValue();

    useEffect(() => {
        window.addEventListener('hashchange', function(){
            if(window.location.hash.includes("selectedPlaylistId")) {
                // Grab the #selectedPlaylistId value
                // Note that #selectedPlaylistId= is 20 characters long.
                let selectedPlaylistId = window.location.hash.substr(20);
                dispatch({
                    type: 'SET_SELECTED_PLAYLIST',
                    selected_playlist: selectedPlaylistId,
                });
            }
        });
    }, [])



    return (
        <div className="sidebar">
            <img className="sidebar__logo" src={spotifyLogo} alt="Spotify Logo"/>
            <div className="sidebar__navigation">
                <SidebarOption Icon={HomeIcon} title="Home" />
                <SidebarOption Icon={SearchIcon} title="Search" />
                <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
            </div>

            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr/>

            {playlists?.items?.map((playlist) => (
                <a href={`#selectedPlaylistId=${playlist.id}`}>
                    <SidebarOption title={playlist.name} />
                </a>
            ))}
        </div>
    );
}

export default Sidebar
