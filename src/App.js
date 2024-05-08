import "./App.css";
import MyRGBPanel from "./components/MyRGBPanel";

function App() {
  return (
    <div className="App">
      <h1>Javascript程式設計，使用react</h1>
      <h2>第一個元件</h2>
      <MyRGBPanel />
      {/* 新增按鈕 */}
      <button onClick={handleClick} className="button-large">Button</button>

    </div>
  );
}

export default App;