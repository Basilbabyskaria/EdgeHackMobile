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
      }, i * 7000);
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
