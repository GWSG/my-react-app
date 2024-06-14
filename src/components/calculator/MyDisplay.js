import React from 'react';

function MyDisplay(props){
    return <div className='display'>{props.result}</div>//這個主要顯示計算結果後的答案,就是顯示答案的小黑板
}

export default MyDisplay;