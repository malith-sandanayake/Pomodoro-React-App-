import "./Header.css";

function Header() {
  return (
    <div className="upper">
      <div className="header">
        <div className="brandname">
          <p>Pomodoro</p>
        </div>
        <div className="setting">
          <button className="progress-btn btnset1">Progess</button>
          <button className="setting-btn btnset1">Setting</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
