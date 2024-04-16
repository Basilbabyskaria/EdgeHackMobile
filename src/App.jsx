import "./App.css";

function App() {
  function openTabs() {
    for (let i = 0; i < 21; i++) {
      setTimeout(() => {
        window.open(
          `https://www.bing.com/search?q=${i}&qs=n&form=QBRE&sp=-1&ghc=1&lq=0&pq=3&sc=11-1&sk=&cvid=D087C070AE1041D694CD1F5B18C39721&ghsh=0&ghacc=0&ghpl=`
        );
      }, i * 7000);
    }
  }
  function openTabs2() {
    for (let i = 10; i < 41; i++) {
      setTimeout(() => {
        window.open(
          `https://www.bing.com/search?q=${i}&qs=n&form=QBRE&sp=-1&ghc=1&lq=0&pq=3&sc=11-1&sk=&cvid=D087C070AE1041D694CD1F5B18C39721&ghsh=0&ghacc=0&ghpl=`
        );
      }, (i - 10) * 7000);
      if (i === 40) {
        window.open("https://rewards.bing.com/?signin=1&FORM=ANNRW1", "_blank");
        setTimeout(() => {
          let x = document.querySelectorAll(".mee-icon-AddMedium");
          if (x.length > 0) {
            try {
              for (i = 0; 1 < x.length; i++) {
                x[i].click();
              }
            } catch {
              console.log("Done");
            }
          }
        }, 7000);
      }
    }
  }
  return (
    <>
      <h1>Edge Hack</h1>
      <div className="card">
        <button onClick={openTabs}>Start 1</button>
      </div>
      <div className="card">
        <button onClick={openTabs2}>Start 2</button>
      </div>
    </>
  );
}

export default App;
