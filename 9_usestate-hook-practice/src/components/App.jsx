import React, { useState } from "react";

function getTime(){
  let time = new Date().toLocaleTimeString();
  return time;
}

function App() {
  const [localTime, setTime] = useState(getTime());

  function updateTime(){
    setTime(getTime());
  }

  setInterval(() => {
    updateTime()
  }, 1000);
  return (
    <div className="container">
      <h1>{localTime}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
