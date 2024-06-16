import React from 'react';

//MyDisplay就負責顯示result整個運算完後的值就好

function MyDisplay(props){
    return <div className='display'>{props.result}</div>//這個主要顯示計算結果後的答案,就是顯示答案的小黑板
}

export default MyDisplay;