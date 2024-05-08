import "./App.css";
import MyRGBPanel from "./components/MyRGBPanel";

function App() {
  // 點擊事件處理函數
  const handleClick = () => {
    console.log("按鈕被點擊了！");
  };

  return (
    <div className="App">
      <h1>Javascript程式設計，使用react</h1>
      <h2>第一個元件</h2>
      <MyRGBPanel />
      <button onClick={handleClick} className="button-large">Button</button>
    </div>
  );
}

export default App;
