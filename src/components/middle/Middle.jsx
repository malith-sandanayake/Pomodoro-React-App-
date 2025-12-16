import { useState } from 'react';
import './Middle.css'

function Middle({pomoTime, start, setStart}) {

    const [pause, setPause] = useState(true);

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
    }

    function handlePause(){
        setPause(false);
    }   
    
    function handleResume(){
        setPause(true);
    }
    
    function handleCancel(){
        setStart(false);
    }

    return ( 
        <div className="middle">
            <div className="box">
                <div className="breaks">
                    <p>Pomodoro</p>
                    <p>Short Break</p>
                    <p>Long Break</p>
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