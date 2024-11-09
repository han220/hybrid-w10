import { useEffect, useState } from "react";
import "./App.css";

import myImage from "./me.png";

function App() {
  const [myMessage, setMyMessage] = useState(
    localStorage.getItem("myData") || "반갑습니다!"
  );
  useEffect(() => localStorage.setItem("myData", myMessage), [myMessage]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={myImage} className="App-logo" alt="logo" />
        <p>
          제 이름은 유정섭입니다. <br />
          컴퓨터 공학 심화를 전공하고 있어요.
        </p>
        <p>
          저에 대한 여러분들의 노트를 남겨보세요!
          <br />* 브라우저 저장소에 저장됩니다.
        </p>
        <div
          style={{
            maxWidth: 500,
            width: "100%",
            padding: "16px 32px",
            boxSizing: "border-box",
          }}
        >
          <textarea
            style={{
              width: "100%",
            }}
            value={myMessage}
            onChange={(e) => setMyMessage(e.target.value)}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
