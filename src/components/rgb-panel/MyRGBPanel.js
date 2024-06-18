import React from "react"; 
import { useState } from "react"; //紀錄每一個滑軌所移動的值
import MySlider from "./MySlider"; //引用MySlider.js

function MyRGBPanel() {
    const [r, setR] = useState(128);//有一個變數是r,如果有收到調整的值,就傳到方塊和方框那邊去
    const [g, setG] = useState(128);//有一個變數是g,如果有收到調整的值,會傳到方塊和方框那邊去
    const [b, setB] = useState(128);//有一個變數是b,如果有收到調整的值,會傳到方塊和方框那邊去

    const updateR = (v) => setR(v); //如果R滑軌有移動的話,就傳R的值到setR
    const updateG = (v) => setG(v); //如果G滑軌有移動的話,就傳G的值到setG
    const updateB = (v) => setB(v); //如果B滑軌有移動的話,就傳B的值到setB

    

// 定義一個名為 rgbCss(可以變顏色的方框) 的常數對象
const rgbCss = {
    border: `10px solid rgb(${r}, ${g}, ${b})`, // 邊框顏色
    borderRadius: "20px", // 邊框圓角
    width: "300px", // 寬度
    display: "flex", // Flex 彈性的意思(置中對其)
    flexDirection: "column", // Flex 方向
    padding: "20px", // 內邊距
    justifyContent: "center", // 主軸居中(置中對其)
    alignItems: "center", // 交叉軸居中
    margin: "auto", // 整個rgbCss的元件水平居中
};


    return (
        <>
              {/* 顯示外圍方框的背景色 */}
            <div style={rgbCss}>
                {/* 顯示目前色彩 */}
                <h2 style={{ color:`rgb(${r}, ${g}, ${b})`}}> 
                    {/* 會隨著改變r,g,b這三的變數的數值,這個方框也會跟著變色 */}
                    目前色彩
                </h2>

                  {/* 顯示方框裡面的長方形區塊的背景色 */}
                <div
                    style={{
                        width: "250px", //寬度
                        height: "100px",//高度
                        backgroundColor: `rgb(${r}, ${g}, ${b})`,
                        //會隨著改變r,g,b這三的變數的數值,這個方塊也會跟著變色
                    }}
                />
                <span>R: </span> {/* span是顯示在網頁上的字體 */} 
                <MySlider value={r} onChange={updateR} />
                {/* value是顯示在網頁上滑軌移動的數值,如果有移動的話就呼叫updateR */}
                <span>G: </span>
                <MySlider value={g} onChange={updateG} />
                <span>B: </span>
                <MySlider value={b} onChange={updateB} />
            </div>
        </>
    );
}

export default MyRGBPanel;
//將 MyRGBPanel 元件匯出，以便在 index.js 中使用。
