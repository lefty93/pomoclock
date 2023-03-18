// TODO:Customize the audio player
import React, { useState, useRef } from 'react'
import { tracks } from '../data/tracks';

// import components
import Controls from './Controls'

function AudioPlayer() {
    // states
    const [trackIndex, setTrackIndex] = useState(0);
    const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);
    const [timeProgress, setTimeProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    
    // reference
    const audioRef = useRef();

    const handleNext = () => {
        if (trackIndex >= tracks.length - 1) {
            setTrackIndex(0);
            setCurrentTrack(tracks[0])
        } else {
            setTrackIndex((prev) => prev + 1);
            setCurrentTrack(tracks[trackIndex + 1])
        }
    }


  return (
      <>
          <Controls
              {...{
                  audioRef,
                  duration,
                  setTimeProgress,
                  tracks,
                  currentTrack,
                  timeProgress,
                  setDuration,
                  trackIndex,
                  setTrackIndex,
                  setCurrentTrack,
                  handleNext,
              }}
          />
    </>
  )
}

export default AudioPlayer