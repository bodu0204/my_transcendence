import { useState } from "react";

const Example = () => {
  let [val, s_val] = useState(0);
  return (
    <>
      <h3>練習問題</h3>
      <p>
        記述を変更し、完成コードのように+と-ボタンをクリックすると現在のカウント数が1ずつ増減する機能を実装してください。*useStateを用いてcountとsetCountを定義してください。
      </p>
      <p>現在のカウント数: {val}</p>
      <button
        onClick={function(_){s_val(function(v){return(v+1);})}}
      >+</button>
      <button
        onClick={function(_){s_val(function(v){return(v===0?v:v-1);})}}
      >-</button>
    </>
  );
};

export default Example;
