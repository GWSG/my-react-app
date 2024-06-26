import "./App.css";
import MyRGBPanel from "./components/MyRGBPanel";

function App() {
 // 點擊事件處理函數，彈出訊息框
  const handleClick = () => {
    alert("請不要亂按！");
  };
  return (
    <div className="App">
      <h1>學號：5B00G0042，姓名：許皓詠</h1>
      <h2>第一個元件</h2>
      <MyRGBPanel />
      <h2>第二個元件</h2>
      <button onClick={handleClick} className="button-large">緊急按鈕</button>
    </div>
  );
}

export default App;
