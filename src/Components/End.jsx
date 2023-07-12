


import React, { useContext } from "react";
import { contexted } from "./context/Context";
import { questions } from "./Questions";

const End = () => {
  const { user, setUser, score, setScore, opchoosen, setOpChoosen } = useContext(contexted);

  let message;
  switch (true) {
    case score === 0:
      message = "(I am utterly disappointed🙂..jamma " + score + ".shame on you.)";
      break;
      case score === 1:
        message = "(poor performance🤨)"
    break;
     case score === 2 :
      message = "(Thkai x "+ score + " Tetti naramro ni haina.🥰 )"
      break;
      case score === 3 :
        message = "(3/4 ohoooooooooo thk x la 😮‍💨 )"
        break;
        case score  === 4 :
          message = "(4/4 amamammama llllalalal babaabababaallllllllll..... 🤩  🤩  🤩 )"
  }

  return (
    <div className="container my-3">
      <div style={{ textAlign: "center" }}>
        <h3>
          {score} / {questions.length}
          <br /><br />
          {message}
        </h3>
      </div>
    </div>
  );
};

export default End;



