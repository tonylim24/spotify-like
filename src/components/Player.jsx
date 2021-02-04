import React from 'react';
import '../stylesheets/Player.css';
import Body from './Body';
import Header from './Header';
import PlayerController from './PlayerController';
import Sidebar from "./Sidebar";

function Player(spotify) {
    return (
        <div className="player">
            <div className="player__container">
                <Sidebar />
                <div className="player__main">
                    <Header spotify={spotify} />
                    <Body playlist={spotify} />
                </div>
            </div>

            <PlayerController />
        </div>
    )
}

export default Player