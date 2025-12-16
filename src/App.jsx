import Header from "./components/header/header";
import Middle from "./components/middle/Middle";
import Tasks from "./components/tasks/Tasks";
import { useState , useEffect} from "react";

function App() {

  const [pomoTime, setPomoTime] = useState(0);
  const [start, setStart] = useState(false);
  const [pause, setPause] = useState(true);
  const [isRunning, setIsRunning] = useState(false);


  useEffect(() => {
    let interval = null;

    if (start && isRunning && pomoTime > 0){
      interval = setInterval(() => {
        setPomoTime((prevTime) => prevTime - 1);
      }, 1000);
    }else{
      clearInterval(interval);
    }

    return () => clearInterval(interval);
    }, [start, isRunning, pomoTime]);

  return ( 
    <>
      <Header/>
      <Middle pomoTime={pomoTime} start={start} setStart={setStart} pause={pause} 
      setPause={setPause} setIsRunning={setIsRunning}
      />
      <Tasks setPomoTime={setPomoTime}/>
    </>
   );
}

export default App;