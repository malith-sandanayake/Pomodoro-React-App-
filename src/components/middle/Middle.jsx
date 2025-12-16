import './Middle.css'

function Middle({pomoTime}) {

    function formatTime(){
        const minutes = Math.floor(pomoTime/ 60);
        const seconds = pomoTime % 60;

        const formattedSeconds = String(seconds).padStart(2, '0');
        const formattedMinutes = String(minutes).padStart(2, '0')
        let displayTime = `${minutes}:${formattedSeconds}`;
        return displayTime;
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
                <button className="start-btn">START</button>
            </div>
        </div>
     );
}

export default Middle;