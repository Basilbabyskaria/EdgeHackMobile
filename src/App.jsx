// import { useState } from "react";
import "./App.css";
import questions from "./questions.json";
function App() {
  const shuffledQuestions = [...questions].sort(() => 0.5 - Math.random());

  function openTabs() {
    window.open("https://rewards.bing.com/dashboard", "_blank");

    for (let i = 10; i < 35; i++) {
      setTimeout(
        () => {
          window.open(
            `https://www.bing.com/search?q=${shuffledQuestions[i]}&qs=n&form=QBRE&sp=-1&ghc=1&lq=0&pq=3&sc=11-1&sk=&cvid=D087C070AE1041D694CD1F5B18C39721&ghsh=0&ghacc=0&ghpl=`,
          );
        },
        (i - 10) * 7000,
      );
    }
  }

  function openTabs2() {
    window.open("https://rewards.bing.com/dashboard", "_blank");

    setTimeout(() => {
      for (let i = 10; i < 32; i++) {
        setTimeout(
          () => {
            window.open(
              `https://www.bing.com/search?q=${shuffledQuestions[i]}&qs=n&form=QBRE&sp=-1&ghc=1&lq=0&pq=3&sc=11-1&sk=&cvid=D087C070AE1041D694CD1F5B18C39721&ghsh=0&ghacc=0&ghpl=`,
            );
          },
          (i - 10) * 28572,
        );
      }
    }, 7000);
  }

  return (
    <>
      <h1>Edge Hack</h1>

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
