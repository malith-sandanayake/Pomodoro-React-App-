import Header from "./components/header/header";
import Middle from "./components/middle/Middle";
import Tasks from "./components/tasks/Tasks";
import { useState } from "react";

function App() {

  const [pomoTime, setPomoTime] = useState(0);

  return ( 
    <>
      <Header/>
      <Middle pomoTime={pomoTime}/>
      <Tasks/>
    </>
   );
}

export default App;