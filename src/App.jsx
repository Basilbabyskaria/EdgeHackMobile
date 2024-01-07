import "./App.css";

function App() {
  function openTabs() {
    for (let i = 0; i < 21; i++) {
      setTimeout(() => {
        window.open(
          `https://www.bing.com/search?q=${i}&qs=n&form=QBRE&sp=-1&ghc=1&lq=0&pq=3&sc=11-1&sk=&cvid=D087C070AE1041D694CD1F5B18C39721&ghsh=0&ghacc=0&ghpl=`
        );
      }, i * 6000);
    }
    
  }
  return (
    <>
      <h1>Edge Hack</h1>
      <div className="card">
        <button onClick={openTabs}>Start</button>
      </div>
    </>
  );
}

export default App;
