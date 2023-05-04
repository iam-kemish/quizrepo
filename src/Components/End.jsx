import React from "react";
import { useContext } from "react";
import { contexted } from "./context/Context";
import { questions } from "./Questions";

const End = () => {
  const { user, setUser, score, setScore } = useContext(contexted);
  return (
    <div className="container my-3">
      <div style={{ textAlign: "center" }}>
        <h3>
         
          {score} / {questions.length}<br/><br/>
          {
            score <= 2 ? <span>(I am utterly disappointed, sachi alik badi expect garexu🙂..jamma {score} ettiii.)</span>: <span>(wow score herdai khusi lagyo.😍 )</span>
          }
        </h3>
      </div>
    </div>
  );
};

export default End;
