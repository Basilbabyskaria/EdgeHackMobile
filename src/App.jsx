import './App.css'

function App() {
  function openTabs() {
  for (let i = 0; i < 2; i++) {
    setTimeout(() => {
      window.open(`https://www.bing.com/search?q=${i}`);
    }, i * 3000);
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

export default App
