import React from 'react';
import '../stylesheets/PlayerController.css';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import { Grid, Slider } from "@material-ui/core";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

function PlayerController() {
    return (
        <div className="playerController">
            <div className="playerController__now-playing">
                <img 
                    className="now-playing-albumImg"
                    src="https://i.scdn.co/image/ab67616d000048510c13d3d5a503c84fcc60ae94" 
                    alt=""/>
                <div className="now-playing-information">
                    <h4>Something Just Like This</h4>
                    <p>The Chainsmokers, Coldplay</p>
                </div>
            </div>

            <div className="playerController__player-controls-container">
                <div className="player-controls-container__controls">
                    <ShuffleIcon className="player-controls-green" />
                    <SkipPreviousIcon className="player-controls-icon"/>
                    <PlayCircleFilledIcon fontSize="large" className="player-controls-icon"/>
                    <SkipNextIcon className="player-controls-icon"/>
                    <RepeatIcon className="player-controls-icon"/>
                </div>

            </div>

            <div className="playerController__extra-controls">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon className="extra-controls-playListIcon" />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon className="extra-controls-volumeDownIcon" />
                    </Grid>
                    <Grid item xs>
                        <Slider aria-labelledby="continuous-slider" />
                    </Grid>
                </Grid>               
            </div>
        </div>
    )
}

export default PlayerController
