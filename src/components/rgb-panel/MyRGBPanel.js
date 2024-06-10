import React from "react"; 
import { useState } from "react"; //紀錄每一個滑軌所移動的值
import MySlider from "./MySlider"; //引用MySlider.js

function MyRGBPanel() {
    const [r, setR] = useState(128);
    const [g, setG] = useState(128);
    const [b, setB] = useState(128);

    const updateR = (v) => setR(v);
    const updateG = (v) => setG(v);
    const updateB = (v) => setB(v);

    

    const rgbCss = {
        border: `10px solid rgb(${r}, ${g}, ${b})`, // 設定邊框顏色為動態 RGB 值
        borderRadius: "20px",
        width: "300px",
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
    };

    return (
        <>
              {/* 顯示外圍方框的背景色 */}
            <div style={rgbCss}>
                {/* 顯示目前色彩 */}
                <h2 style={{ color:`rgb(${r}, ${g}, ${b})`}}>
                    目前色彩
                </h2>

                  {/* 顯示方框裡面的長方形區塊的背景色 */}
                <div
                    style={{
                        width: "250px",
                        height: "100px",
                        backgroundColor: `rgb(${r}, ${g}, ${b})`,
                    }}
                />
                <span>R: </span> {/* span是顯示在網頁上的字體 */} 
                <MySlider value={r} onChange={updateR} />{/* value是顯示在網頁上滑軌移動的數值 */}
                <span>G: </span>
                <MySlider value={g} onChange={updateG} />
                <span>B: </span>
                <MySlider value={b} onChange={updateB} />
            </div>
        </>
    );
}

export default MyRGBPanel;//將 MyRGBPanel 元件匯出，以便在 index.js 中使用。
