import  { useContext, useState } from "react";
import { questions } from "./Questions";
import { contexted } from "./context/Context";

function Quiz() {


  const{user, score, setScore, setGame,opchoosen, setOpChoosen} = useContext(contexted);

  const [currQuestion, setcurrQuestion] = useState(0);

  const nextQuestion = () =>{
    if(!opchoosen) {
      alert("You must choose a option")
      return;
    }else {
     if( questions[currQuestion].answer === opchoosen ) {

       setScore(score + 1);
     }
      setcurrQuestion(currQuestion + 1);
      setOpChoosen("")
    }
  }


  const PrevQuestion = () =>{
   let question = prompt("Do you want to edit your previous answer? yes or no")
   if (question === "yes") {
    setcurrQuestion(currQuestion - 1);
   } else if(question === "no") {
    return;
   }
   
  }
  const chooseOptions = (clickedOption) =>{
    alert(`You have choosed ${clickedOption}`)
    
    setOpChoosen(clickedOption)
  }
  

  const finished = () => {
    if (currQuestion === questions.length - 1 && questions[currQuestion].answer === opchoosen) {
      setScore(score + 1);
    }
    setGame("endscr");
  };
  return (
    <div className="my-3 quiz" style={{ textAlign: "center" }}>
       <h3> Hi {user}, answer these questions, lets see k choose grxau. 😀</h3>
      <h2>{questions[currQuestion].prompt}</h2>
      <div className="options">
      
       <button className="btn btn-warning clicked" onClick={() => chooseOptions("a")}>
          {questions[currQuestion].a} 
        </button> 
        <button className="btn btn-warning clicked"onClick={() => chooseOptions("b")}>
          {questions[currQuestion].b}
        </button> 
        <button className="btn btn-warning clicked" onClick={() => chooseOptions("c")}>
          {questions[currQuestion].c}
        </button> 
        <button className="btn btn-warning clicked" onClick={() => chooseOptions("d")}>
          {questions[currQuestion].d}
        </button>
       </div>
     
      {currQuestion === questions.length - 1 ? (
        <div className="my-3">
          <button onClick={finished} className="btn btn-danger">Completed</button><br/>
          <span>Tap on this.</span>
        </div>
      ) : (
        <div className="my-3">
          <button onClick={nextQuestion} className="btn btn-success">Next</button><br/>
           <button onClick={PrevQuestion} className="btn btn-info" disabled={currQuestion === 0}>Previous</button>
        </div>
      )}
    </div>
  );
}

export default Quiz;
Quiz.js
