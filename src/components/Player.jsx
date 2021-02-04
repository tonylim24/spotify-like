import React from 'react';
import '../stylesheets/Player.css';
import Body from './Body';
import Header from './Header';
import PlayerController from './PlayerController';
import Sidebar from "./Sidebar";

function Player() {
    return (
        <div className="player">
            <div className="player__container">
                <Sidebar />
                <div className="player__main">
                    <Header />
                    <Body />
                </div>
            </div>

            <PlayerController />
        </div>
    )
}

export default Player