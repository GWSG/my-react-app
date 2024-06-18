import React from "react";
import Square from "./Square";
import "./tictactoe.css";

function Board({ xIsNext, squares, onPlay }) {
  const handleClick = (i) => {
    //然後這邊的handleClick的i就會收到被按下格子的值
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    //這一段就是複製或保留一份目前按下去這個格子的值,然後轉換成看當下是先顯示X還是O

    if (xIsNext) {
      //意思就是我按下去的格子不是X就是O阿
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length - 1; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
        return squares[a];
    }
    return null;
  };

  const winner = calculateWinner(squares);
  let status = winner ? `贏家: ${winner}` : `下一個玩家: ${xIsNext ? "X" : "O"}`;
  //每一次都會先從X開始,再來才是O


  // let status;
  // if (winner) {
  //   status = "贏家 " + winner;
  // } else {
  //   status = "下一個玩家: " + (xIsNext ? "X" : "O");
  // }

  return (
    <>
      <div className="status">{status}</div>
      <div>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} /> 
          {/* 當按下去的時候handleClick(0)函式,會觸發,同時value的值給<Square> */}
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} /> 
          {/* 當按下去的時候handleClick(1)函式,會觸發,同時value的值給<Square> */}
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} /> 
          {/* 當按下去的時候handleClick(2)函式,會觸發,同時value的值給<Square> */}
      </div>
      <div>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} /> 
          {/* 當按下去的時候handleClick(3)函式,會觸發,同時value的值給<Square> */}
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} /> 
          {/* 當按下去的時候handleClick(4)函式,會觸發,同時value的值給<Square> */}
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} /> 
          {/* 當按下去的時候handleClick(5)函式,會觸發,同時value的值給<Square> */}
      </div>
      <div>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} /> 
          {/* 當按下去的時候handleClick(6)函式,會觸發,同時value的值給<Square> */}
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} /> 
          {/* 當按下去的時候handleClick(7)函式,會觸發,同時value的值給<Square> */}
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} /> 
          {/* 當按下去的時候handleClick(8)函式,會觸發,同時value的值給<Square> */}
      </div>
    </>
  );
}
export default Board;