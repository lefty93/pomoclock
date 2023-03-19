import React, { useState, useEffect } from 'react';

function PomodoroTimer() {
    const [time, setTime] = useState(25 * 60)
    const [isRunning, setIsRunning] = useState(false)
    const [lastClicked, setLastClicked] = useState('pomodoro')

    const startpauseaudio = new Audio('/audio/switch-1.wav')
    const resetaudio = new Audio('/audio/button-17.wav')
    

    useEffect(() => {
        if (isRunning) {
            const timerId = setInterval(() => {
                setTime(prevTime => prevTime - 1);
            }, 1000)
            return () => clearInterval(timerId);
        } 
    }, [isRunning]);
    
    useEffect(() => {
        document.title = `${formatTime(time)} - Focus Time`
    });

    useEffect(() => {
        if (time === 0) {
            const alarm = new Audio('/audio/alarm.mp3')
            alarm.play();
            setIsRunning(false);

            if (lastClicked === 'pomodoro') {
                setTime(5 * 60);
                setLastClicked('short')
                
            } else {
                setTime(25 * 60);
                setLastClicked('pomodoro')
                
            }
        }
    }, [time, lastClicked])

    // Switch mode by button
    const handlePomodoro = () => {
        setIsRunning(false);
        setTime(25 * 60)
        setLastClicked('pomodoro')
        
    }
    const handleShort = () => {
        setIsRunning(false)
        setTime(5 * 60)
        setLastClicked('short')
        
    }
    const handleLong = () => {
        setIsRunning(false);
        setTime(15 * 60)
        setLastClicked('long')
        
    }

    function handleStart() {
        setIsRunning(prevIsRunning => !prevIsRunning)
        startpauseaudio.play()
    }

    function handleReset() {
        setIsRunning(false);
        setTime(lastClicked === 'short' ? 5 * 60 : lastClicked === 'long' ? 15 * 60 : 25 * 60)
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
            <div className="pomodoro-container">
                <div className="time-tag">
                    <button onClick={handlePomodoro} className={lastClicked === 'pomodoro' ? 'active' : ''}>Pomodoro</button>
                    <button onClick={handleShort} className={lastClicked === 'short' ? 'active' : ''}>Short Break</button>
                    <button onClick={handleLong} className={lastClicked === 'long' ? 'active' : ''}>Long Break</button>
                </div>
                
                <div className="time-display">
                    <h2>{formatTime(time)}</h2>
                </div>
                <div className="time-control">
                    <button onClick={handleStart}>{isRunning ? 'Pause' : 'Start'}</button>
                    <button onClick={handleReset}>Reset</button>
                </div>
            </div>


        </>
    )
}

export default PomodoroTimer