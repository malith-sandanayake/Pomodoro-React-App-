import './Middle.css'
import { useState } from 'react';

function Middle({pomoTime, start, setStart, pause, setPause, setIsRunning, setPomoTime}) {

    const [colorSection, setColorSection] = useState(1);

    function formatTime(){
        const minutes = Math.floor(pomoTime/ 60);
        const seconds = pomoTime % 60;

        const formattedSeconds = String(seconds).padStart(2, '0');
        const formattedMinutes = String(minutes).padStart(2, '0')
        let displayTime = `${formattedMinutes}:${formattedSeconds}`;
        return displayTime;
    }

    function handleStart(){
        setStart(true);
        setIsRunning(true);
    }

    function handlePause(){
        setPause(false);
        setIsRunning(false);
    }   
    
    function handleResume(){
        setPause(true);
        setIsRunning(true);
    }
    
    function handleCancel(){
        setStart(false);
        setIsRunning(false);
        setPomoTime(0);
    }

    function handlePomodoro(){
        setColorSection(1)
        setPomoTime(0)
    }

    function handleShortBreak(){
        setColorSection(2);
        setPomoTime(300)
    }

    function handleLongBreak(){
        setColorSection(3);
        setPomoTime(900)
    }

    return ( 
        <div className="middle">
            <div className="box">
                <div className="breaks">
                    <p style={ colorSection==1? {backgroundColor: 'crimson'} : {}} onClick={handlePomodoro}>Pomodoro</p>
                    <p style={ colorSection==2? {backgroundColor: 'crimson'} : {}} onClick={handleShortBreak}>Short Break</p>
                    <p style={ colorSection==3? {backgroundColor: 'crimson'} : {}} onClick={handleLongBreak}>Long Break</p>
                </div>
                <h1 className="time">{formatTime()}</h1>
                {!start? <button className="start-btn" onClick={handleStart}>START</button>:
                <div className="stbtn">
                    {pause? <button onClick={handlePause}>Pause</button>:
                    <button onClick={handleResume}>Resume</button>}
                    <button onClick={handleCancel}>Cancel</button>
                </div>
                }       
            </div>
        </div>
     );
}

export default Middle;