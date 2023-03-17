// TODO: Add short break (5 minutes) and long break (15 minutes)

import React, { useState, useEffect } from 'react'
import MenuButton from './MenuButton'

function PomodoroTimer() {
    const [time, setTime] = useState(25 * 60)
    const [isRunning, setIsRunning] = useState(false)
    let startpauseaudio = new Audio('/audio/switch-1.wav')
    let resetaudio = new Audio('/audio/button-17.wav')

    useEffect(() => {
        let timerId;
        if (isRunning && time > 0) {
            timerId = setInterval(() => {
                setTime(prevTime => prevTime - 1);
            }, 1000)
        } else if (time === 0) {
            setIsRunning(false);
        }
        return () => clearInterval(timerId);
    }, [isRunning, time]);

    useEffect(() => {
        document.title = `${formatTime(time)} - Focus Time`
    })

    function handleStart() {
        setIsRunning(prevIsRunning => !prevIsRunning)
        startpauseaudio.play()
    }

    function handleReset() {
        setIsRunning(false);
        setTime(25 * 60)
        resetaudio.play()
    }

    function formatTime(timeInSeconds) {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${minutes.toString().padStart(2, "0")}:${seconds
            .toString()
            .padStart(2, "0")}`;
    }

    return (
        <>
            <MenuButton img1='/images/font-white.png' img2='/images/font-red.png' />
            <h2>{formatTime(time)}</h2>
            <button onClick={handleStart}>{isRunning ? 'Pause' : 'Start'}</button>
            <button onClick={handleReset}>Reset</button>

        </>
    )
}

export default PomodoroTimer