import React, { useState } from "react";
import Board from "./Board";
import "./tictactoe.css";

function TicTacToe() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  //history是有兩個1*9的Array
  //儲存歷程記錄,把紀錄儲存成history,然後因為是九個格子,所以Array填九

  const [currentMove, setCurrentMove] = useState(0);
  //紀錄currentMove現在是到第幾數,初始從0開始

  const currentSquares = history[currentMove];
  //把記錄到的history儲存到currentSquares

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
        {/*把xIsNext和squares跟onPlay的數值傳給Board*/}
        {/*xIsNext是會傳現在輪到X還是O*/}
        {/*squares會傳currentSquares的狀態*/}
        {/*onPlay則是會把是否還有再繼續玩的狀態給Board*/}
      </div>
      <div className="game-info">
        <h4>遊戲歷程</h4>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

export default TicTacToe;