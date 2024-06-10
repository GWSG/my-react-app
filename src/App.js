import "./App.css";
import MyRGBPanel from "./components/rgb-panel/MyRGBPanel"
import MySlider from "./components/rgb-panel/MySlider";
import MyCalculator from "./components/calculator/MyCalculator";
import TicTacToe from "./components/tic-tac-toe/TicTacToe";

function App() {
 // 點擊事件處理函數，彈出訊息框
 //MyCalculator是計算機事件
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
      
      <h1>MySlider</h1>
      <MySlider />
  
      <h1>MyCalculator</h1>  
       
      <MyCalculator />
      <h1>Tic-Tac-Toe Game</h1>
      <TicTacToe />
      
    </div>
  );
}

export default App;
