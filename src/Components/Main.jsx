import React, { useState } from "react";
import { useContext } from "react";
import { contexted } from "./context/Context";
export default function Main() {
  const { game, setGame } = useContext(contexted);
  const { user, setUser } = useContext(contexted);
  const {inputval, setInputVal} = useContext(contexted)
  

  const handleclick = () => {
    if(!inputval) {
      alert("kemish says you must enter your name.")
      return
    }else {
      setUser(inputval);

    }
  
  };

  const handleStartQuiz = () =>{
    if(!user) {
      alert("Again, kemish says you must enter your name first.")
    }else {
      setGame("quizplay")
    }
  }
  return (
    <div className="menu">
      <h5 style={{ padding: "10px", textAlign: "center" }}>
        Firstly type your name on the input box below than click the edit name
        button and enjoy the game.
      </h5>
      <input
        type="text"
        onChange={(e) => setInputVal(e.target.value)}
        style={{ padding: "8px", width: "290px" }}
      />
      <br />
      <button className="btn btn-warning" onClick={handleclick}>
        Insert name
      </button>
      <br />
   
     <div>
        <h3 className="user">{user}'s game</h3>
       <br />
       {
         <button className="btn btn-primary" onClick={handleStartQuiz}>
           Start quiz
         </button>
       }
     </div>
    
    </div>
  );
}
