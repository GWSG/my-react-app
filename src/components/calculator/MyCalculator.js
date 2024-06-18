import React, { useState } from "react";
import MyDisplay from "./MyDisplay";
import MyButton from "./MyButton";
import "./MyCalculator.css";

//MyCalculator負責接收傳回來的值是什麼

function MyCalculator() {
  const [result, setResult] = useState("0");//useState初始值是0
  // handleClick是MyButton的事件處理常式
  const handleClick = (value) => {
    // alert(value);
    switch (value) { 
      //依照value收到的值來做下面的運算
      case "0"://這邊的case是按下去後會回傳什麼值
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case ".":
      case "+":
      case "-":
      case "*":
      case "/":
        if (result === "0") {
          //如果原來初始值是0,要按下=後才會開始運算
          setResult(value);
        } else {
          setResult(result + value);
        }
        break;
      case "=":
        setResult(eval(result).toString());
        //先評估result的值然後轉成字串再傳回去給result,然後再運算出來,最後顯示
        //eval:就是評估一個字串的它的運算值的結果,然後算完再轉成字串傳回去
        break;
      case "c":
        setResult("");//直接清空,直接變空字串就好
        break;
      case "+/-":
        setResult(parseInt(result, 10) * -1);//就是把result的值*-1
        //parseInt把一個字串轉換成整數,然後以10為基底,然後*-1
        break;
      case "%":
        setResult(parseInt(result, 10) / 100);//就是把result的值/100
        //parseInt把一個字串轉換成整數,然後以10為基底,然後/100
        break;
      default:
        break;
    }
  };
  return (
    <div className="calculator">
    {/* MyButton的按鈕按下去的時候要傳值給副元件,就是handleClick */}
    {/* MyDisplay result = {result},就是要把算好的result傳到MyDisplay,讓MyDisplay可以顯示運算好的值 */}
      <MyDisplay result = {result} />
      <MyButton buttonClicked={handleClick} />
    </div>
  );
}

export default MyCalculator;