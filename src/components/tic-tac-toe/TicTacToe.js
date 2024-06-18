import React, { useState } from "react";
import Board from "./Board";
import "./tictactoe.css";

function TicTacToe() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  //history是有兩個1*9的Array
  //顯示歷程記錄,因為是九個格子,所以元素填九

  const [currentMove, setCurrentMove] = useState(0);
  //紀錄currentMove現在是到第幾數,初始從0開始

  const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 === 0;//紀錄現在已經點過幾個格子
  //xIsNext判斷現在是輪到哪個玩家玩
  //如果是'024就換到X玩,如果是135就是O玩,數字的意思是次數,第1次,第2次這樣
  //OXOX是用currentMove的值來決定的,如果值被2整除就是打X,否則就是打O

  const handlePlay = (nextSquares) => {
    //handlePlay則是繼續往下玩下去

    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    //這一段是從0記錄到現在點擊的位置,意思就是紀錄遊戲歷程的位置
    //我每一次點及一次格子的時候就會改變currentMove和setHistory

    setHistory(nextHistory);
    //setHistory是矩陣的意思,功能是像現在9個格子,所以有九個矩陣,
    //這樣的矩陣才能讓你方便跳回去上一步驟

    setCurrentMove(nextHistory.length - 1);
  };

  const jumpTo = (nextMove) => setCurrentMove(nextMove);

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "回到第 " + move + " 步";
    } else {
      description = "遊戲開始";
    }
    return (
      <>
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{description}</button>
        </li>
      </>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        {/*Board會傳目前的squares,onPlay是繼續再做*/}
        {/*xIsNext則是現在按下去的格子是要顯示O還是X*/}
      </div>
      <div className="game-info">
        <h4>遊戲歷程</h4>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

export default TicTacToe;