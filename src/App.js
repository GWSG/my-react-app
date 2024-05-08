import logo from "./logo.svg";
import "./App.css";
import MySlider from "./MySlider";


function App() {

  const handleClick = () => {
    alert('HELLO，我是學號：5B0G0042，姓名：許皓詠');
  }

  return (
    <div className="App">
      <h1>Javascript程式設計，學號5B0G0042，姓名:許皓詠</h1>
      <h2>第一個元件</h2>
      <span>R: </span><MySlider />
      <span>G: </span><MySlider />
      <span>B: </span><MySlider />
      {/* 新增按鈕 */}
      <button onClick={handleClick} className="button-large">Button</button>
    </div>
  );
}

export default App;