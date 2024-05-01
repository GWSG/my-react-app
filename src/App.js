import logo from "./logo.svg";
import "./App.css";
import MySlider from "./MySlider";


function App() {

  const handleClick = () => {
    alert('HELLO');
  }

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
      {/* 新增按鈕 */}
      <button onClick={handleClick}>顯示訊息</button>
    </div>
  );
}

export default App;