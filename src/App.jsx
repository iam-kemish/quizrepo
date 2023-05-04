import { useState } from "react";
import Main from "./Components/Main";
import Quiz from "./Components/Quiz";
import End from "./Components/End";
import "./App.css";
import { contexted } from "./Components/context/Context";
function App() {
  const [game, setGame] = useState("mainmenu");
  const[score, setScore] = useState(0)
  const[user, setUser] = useState("Server user")
  
  return (
    <contexted.Provider value={{ game, setGame, score, setScore, user, setUser}}>
      
      <div className="container">
        <h1 style={{ textAlign: "center", padding: "6px" }}>Welcome to my Quiz game</h1>
        {game === "mainmenu" && <Main />}
        {game === "quizplay" && <Quiz />}
        {game === "endscr" && <End />}
      </div>
    </contexted.Provider>
  );
}

export default App;
