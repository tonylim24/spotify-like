import React from 'react'

function FeaturedPlaylist(playlist) {
    return (
        <div>
            <a href={playlist?.playlist?.external_urls?.spotify}>
                <img src={playlist?.playlist?.images[0]?.url} alt={playlist?.playlist?.images[0]?.name}/>
            </a>
        </div>
    )
}

export default FeaturedPlaylist
