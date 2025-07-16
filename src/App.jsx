// import { useState } from "react";
import "./App.css";
import questions from "./questions.json";
function App() {
  const shuffledQuestions = [...questions].sort(() => 0.5 - Math.random());
  // const [count, setCount] = useState(20);
  // function change(data) {
  //   if (data.target.value <= 30 && data.target.value>=1) {
  //     setCount(data.target.value);
  //   } else {
  //     alert("Should be between 1 and 30");
  //   }
  // }

  function openTabs() {
    window.open("https://rewards.bing.com/?signin=1&FORM=ANNRW1", "_blank");
    if (window.location.href.match("https://www.bing.com/")) {
      setTimeout(() => {
        let x = document.querySelectorAll(".mee-icon");
        if (x.length > 0) {
          try {
            for (let j = 0; 1 < x.length; j++) {
              x[j].click();
            }
          } catch {
            console.log("Done");
          }
        }
      }, 3000);
    }

    for (let i = 10; i < 32; i++) {
      setTimeout(() => {
        window.open(
          `https://www.bing.com/search?q=${shuffledQuestions[i]}&qs=n&form=QBRE&sp=-1&ghc=1&lq=0&pq=3&sc=11-1&sk=&cvid=D087C070AE1041D694CD1F5B18C39721&ghsh=0&ghacc=0&ghpl=`
        );
      }, (i - 10) * 7000);
    }
  }
  function openTabs2() {
    window.open("https://rewards.bing.com/?signin=1&FORM=ANNRW1", "_blank");
    if (window.location.href.match("https://www.bing.com/")) {
      setTimeout(() => {
        let x = document.querySelectorAll(".mee-icon");
        if (x.length > 0) {
          try {
            for (let j = 0; 1 < x.length; j++) {
              x[j].click();
            }
          } catch {
            console.log("Done");
          }
        }
      }, 3000);
    }

    for (let i = 10; i < 32; i++) {
      setTimeout(() => {
        window.open(
          `https://www.bing.com/search?q=${shuffledQuestions[i]}&qs=n&form=QBRE&sp=-1&ghc=1&lq=0&pq=3&sc=11-1&sk=&cvid=D087C070AE1041D694CD1F5B18C39721&ghsh=0&ghacc=0&ghpl=`
        );
      }, (i - 10) * 28572);
    }
  }
  return (
    <>
      <h1>Edge Hack</h1>
      {/* <ul className="input">
        <li>WILL RUN </li>
        <li>
          <input
            className="inputfield"
            value={count}
            onChange={change}
            aria-label="inputfield"
          />
        </li>
        <li>TIMES.</li>
      </ul> */}

      <div className="card">
        <button onClick={openTabs}>Speed</button>
      </div>
      <div className="card">
        <button onClick={openTabs2}>Slow</button>
      </div>
    </>
  );
}

export default App;
