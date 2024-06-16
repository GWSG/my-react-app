import React from "react";   // 從 React 庫中引入 React 對象
import "./MyCalculator.css"; //引入MyCalculator.css檔

//MyCalculator只負責按鈕按下去要回傳值就好了

// 定義 MyButton 組件
function MyButton(props) {
    // 定義點擊事件處理函數
    const handelClick = (e) => {
        props.buttonClicked(e.target.value); // handleClick會回傳到這邊,並告訴這個值是什麼東西,值就是下面的value
    }

    // 返回按鈕佈局
    return (
        <div className="board">
            <div>
                <button className="btn btn-action" value="c" onClick={handelClick}>C</button> {/* 清除按鈕 */}
                <button className="btn btn-action" value="+/-" onClick={handelClick}>+/-</button> {/* 正負號切換按鈕 */}
                <button className="btn btn-action" value="%" onClick={handelClick}>%</button> {/* 百分比按鈕 */}
                <button className="btn btn-operator" value="/" onClick={handelClick}>/</button> {/* 除法按鈕 */}
            </div>
            <div>
                <button className="btn" value="7" onClick={handelClick}>7</button> {/* 數字 7 按鈕 */}
                <button className="btn" value="8" onClick={handelClick}>8</button> {/* 數字 8 按鈕 */}
                <button className="btn" value="9" onClick={handelClick}>9</button> {/* 數字 9 按鈕 */}
                <button className="btn btn-operator" value="*" onClick={handelClick}>*</button> {/* 乘法按鈕 */}
            </div>
            <div>
                <button className="btn" value="4" onClick={handelClick}>4</button> {/* 數字 4 按鈕 */}
                <button className="btn" value="5" onClick={handelClick}>5</button> {/* 數字 5 按鈕 */}
                <button className="btn" value="6" onClick={handelClick}>6</button> {/* 數字 6 按鈕 */}
                <button className="btn btn-operator" value="-" onClick={handelClick}>-</button> {/* 減法按鈕 */}
            </div>
            <div>
                <button className="btn" value="1" onClick={handelClick}>1</button> {/* 數字 1 按鈕 */}
                <button className="btn" value="2" onClick={handelClick}>2</button> {/* 數字 2 按鈕 */}
                <button className="btn" value="3" onClick={handelClick}>3</button> {/* 數字 3 按鈕 */}
                <button className="btn btn-operator" value="+" onClick={handelClick}>+</button> {/* 加法按鈕 */}
            </div>
            <div>
                <button className="btn btn-0" value="0" onClick={handelClick}>0</button> {/* 數字 0 按鈕 */}
                <button className="btn" value="." onClick={handelClick}>.</button> {/* 小數點按鈕 */}
                <button className="btn btn-operator" value="=" onClick={handelClick}>=</button> {/* 等號按鈕 */}
            </div>
        </div>
    );
}

// 將 MyButton 組件導出
export default MyButton;
