import React from "react";
import Login from "./Login";

var isLoggedIn = true;

function App() {
  return (
    <div className="container">{
      isLoggedIn ? <h1>Hello logged in user!</h1> : <Login />
    }</div>
  );
}

export default App;
