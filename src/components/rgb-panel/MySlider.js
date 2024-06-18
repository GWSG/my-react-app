import { useState } from "react"; 

function MySlider({onChange}) {
  const [value, setValue] = useState(128);
  // 取得滑軌的狀態並設定滑軌當下的狀態,value是取得狀態會傳給setValue,setValue是設定當下狀態
  const handleChange = (e) => {
    setValue(e.target.value);
    //如果滑軌的值有被移動了,那就會觸發 onChange ,就會讓value的值改變
    if (onChange){
      //如果onChange有改變就執行 onChange 並傳入新的值
      onChange(e.target.value); 
    }
  };
  return (
    <div>
      <input
        type="range"
        width = "200"
        min="0"
        max="255"
        value={value} 
        //滑軌移動的時候,網頁顯示的span的value也會顯示移動後的數值
        onChange={handleChange}
        //這個是不會顯示出來的
      />
      <span>{value}</span> 
      
    </div>
  );
}

export default MySlider;//將 MySlider 元件匯出，以便在 index.js 中使用。