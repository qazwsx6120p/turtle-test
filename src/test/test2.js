import React, { useState } from "react";

function Test2() {
  const [gift, setGift] = useState([
    "iPhone A(一獎)",
    "iPhone B(二獎)",
    "iPhone C(三獎)",
    "iPhone D(四獎)",
    "iPhone E(四獎)",
    "iPhone F(四獎)",
    "iPhone G(五獎)",
    "iPhone H(五獎)",
    "iPhone I(五獎)",
    "iPhone J(五獎)",
  ]);

  const [getgift, setGetGift] = useState([])

  let onClick = () => {
    // 找取抽到禮物的index
    let getGiftIndex = Math.floor(Math.random() * gift.length);

    // 篩選出剩餘的陣列
    let newGiftArr = gift.filter((item, index) => {
      return index !== getGiftIndex;
    });

    let getGiftItem = gift.filter((item, index) => {
      return index === getGiftIndex;
    });

    // 塞進抽中的陣列內
    setGetGift(getGiftItem)
    setGift(newGiftArr);
  };
  // console.log(gift);

  return (
    <>
      <h2>
        抽抽樂總共有五個獎項, 1,2,3 獎各只有一個, 4 獎有 3 個，5 獎有 4
        個，請寫出一個程式可以「隨機」的取得「不重複」的禮物
      </h2>
      <h2>
        禮物有: iPhone A(一獎)、iPhone B(二獎)、iPhone C(三獎)、iPhone
        D(四獎)、iPhone E(四獎)、iPhone F(四獎)、iPhone G(五獎)、iPhone
        H(五獎)、iPhone I、(五獎)、iPhone J(五獎)
      </h2>
      <h2>抽出的禮物:{getgift[getgift.length-1]}</h2>
      <h2> 剩餘的禮物: {gift.length === 0 ? "禮物已經抽完了喔" : gift} </h2>

      <button onClick={onClick}>抽獎</button>
    </>
  );
}

export default Test2;
