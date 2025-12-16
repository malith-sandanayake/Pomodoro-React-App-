import Header from "./components/header/header";
import Middle from "./components/middle/Middle";
import Tasks from "./components/tasks/Tasks";
import { useState } from "react";

function App() {

  const [pomoTime, setPomoTime] = useState(0);
  const [start, setStart] = useState(false);

  return ( 
    <>
      <Header/>
      <Middle pomoTime={pomoTime} start={start} setStart={setStart}/>
      <Tasks setPomoTime={setPomoTime}/>
    </>
   );
}

export default App;