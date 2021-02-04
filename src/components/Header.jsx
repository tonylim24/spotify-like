import React from 'react'
import '../stylesheets/Header.css';
import TopNav from './TopNav';
import { useDataLayerValue } from './DataLayer';
import FeaturedPlaylist from './FeaturedPlaylist';

function Header({ spotify }) {
    // const[{ discover_weekly }, dispatch] = useDataLayerValue();
    const[{ featured_playlist }] = useDataLayerValue();

    return (
        <div className="header">
            <TopNav />
            <div className="header__intro">
                <h1>Good afternoon</h1>
            </div>
            <div className="header__block-container">
                {featured_playlist.playlists?.items?.map((playlist) => (
                    <FeaturedPlaylist playlist={playlist} />
                ))}

                {/* <a href={featured_playlist?.playlists?.items[0]?.external_urls?.spotify}>
                    <img src={featured_playlist?.playlists?.items[0]?.images[0]?.url} alt={featured_playlist?.playlists?.items[0]?.images[0]?.name}/>
                </a> */}
                {/* <div className="header__block-container__text">
                    <strong>PLAYLIST</strong>
                    <h2>Featured Playlist</h2>
                    <p>Editor's featured playlist</p>
                </div> */}
                
            </div>
            
        </div>
    )
}

export default Header
