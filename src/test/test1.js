import React from "react";

function test1() {
  let sum = (num) => {
    // 如果是偶數
    if (num % 2 === 0) {
      let result = num / 2;
      return (result = result * -1);
    // 如果是奇數
    } else {
        // 去小數點後 + 值
      let result = Math.floor(num / 2);
      return (result = result * -1 + num);
    }
  };
  let anser = sum(314159265359);

  return (
    <div>
      <h2>寫一個函式計算下列公式之總和：</h2>
      <br />
      <h2> 1-2+3-4+5-6+.....+ / - N</h2>
      <h2>N = 314,159,265,359</h2>
      <h2>Anser:{anser}</h2>
    </div>
  );
}

export default test1;
