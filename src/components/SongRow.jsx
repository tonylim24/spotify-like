import React from 'react';
import '../stylesheets/SongRow.css';

function SongRow({ track, index }) {

    const convertToRegularTime = (durationInMs) => {
        let durationInSeconds = durationInMs / 1000;
        let durationInMinute =  Math.floor(durationInSeconds / 60);
        let secondsRemainder = Math.floor(durationInSeconds % 60);
        let secondsRemainderStr = ""

        if (secondsRemainder < 10) {
            secondsRemainderStr=`0${secondsRemainder}`;
        }
        else {
            secondsRemainderStr = secondsRemainder;
        }

        return `${durationInMinute}:${secondsRemainderStr}`;
    };

    // console.log(track);
    return (
        <div className="songRow">
            <span className="fixed-width">{index+1}</span>
            <div className="songRow__title">
                <img className="songRow__albumImg" src={track.album.images[0].url} alt={track.album.name}/>
                <div className="songRow__titleInfo">
                    <h1>{track.name}</h1>
                    <p>{track.artists[0].name}</p>
                </div>
            </div>
            <span className="songRow__album">{track.album.name}</span>
            <span className="songRow__dateAdded">Feb 23, 2021</span>
            <span className="songRow__duration">
                {convertToRegularTime(track.duration_ms)}
            </span>
        </div>
    )
}

export default SongRow
