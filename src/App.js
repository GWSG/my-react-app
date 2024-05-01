import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from "./logo.svg"; // 如果需要顯示 logo，可以取消這部分的註解
import "./App.css";
import MySlider from "./MySlider";

function App() {
  return (
    <div className="App">
      <h1>Javascript程式設計，學號5B0G0042，姓名:許皓詠</h1>
      <h2>第一個元件</h2>
      <span>R: </span><MySlider />
      <span>G: </span><MySlider />
      <span>B: </span><MySlider />
      {/* <header className="App-header"> */}
      {/* <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello React! 2024.5.1</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

      {/* </header> */}
    </div>
  );
}

function Football() {
  const shoot = () => {
    alert("Great Shot!");
  }

  return (
    <button onClick={shoot}>Take the shot!</button>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Football />
  </React.StrictMode>
);

export default App;
