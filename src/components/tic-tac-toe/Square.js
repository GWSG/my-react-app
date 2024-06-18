import React from "react";
import "./tictactoe.css"; //引用tictactoe.css

function Square({ value, onSquareClick }) { 
  //Square會回傳的就是那九個格子,然後接受兩個參數的值
  //value要傳的是現在是按下哪一個格子
  //第二個則是當Square被按下去的時候,要做什麼事情
  return (
    <button className="square" onClick={onSquareClick}> 
    {/* 當square被按下去的時候,onClick要回應這件事情 */}
    {/* 然後onClick的值就是onSquareClick存起來的東西 */}

    {/* 最後在圈圈叉叉這邊會收到button */}
      {value}
    </button>
  );
}

export default Square;