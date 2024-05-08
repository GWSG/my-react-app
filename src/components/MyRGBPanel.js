import React from "react";
import { useState } from "react";
import MySlider from "./MySlider";

function MyRGBPanel() {
    const [r, setR] = useState(128);
    const [g, setG] = useState(128);
    const [b, setB] = useState(128);

    const updateR = (v) => setR(v);
    const updateG = (v) => setG(v);
    const updateB = (v) => setB(v);

    // 計算文字顏色
    const getTextColor = (r, g, b) => {
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;
        return brightness > 125 ? "black" : "white";
    };

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
            <div style={rgbCss}>
                <h2 style={{ color: getTextColor(r, g, b) }}>
                    目前色彩
                </h2>
                <div
                    style={{
                        width: "250px",
                        height: "100px",
                        backgroundColor: `rgb(${r}, ${g}, ${b})`,
                    }}
                />
                <span>R: </span>
                <MySlider value={r} onChange={updateR} />
                <span>G: </span>
                <MySlider value={g} onChange={updateG} />
                <span>B: </span>
                <MySlider value={b} onChange={updateB} />
            </div>
        </>
    );
}

export default MyRGBPanel;
