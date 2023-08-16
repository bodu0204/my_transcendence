import { useState } from "react";

const Example = () => {
  const selction = ['A', 'B', 'C'];
  const [val, s_val] = useState("");
  return (
    <>
      <p style={{ textAlign: "center" }}>
        startフォルダの内容が表示されます。
        <br />
        練習用に使ってください！
      </p>
      <select onChange={function(e){s_val(e.target.value);}}>
      {selction.map(function(e){return(<option key={e}>{e}</option>);})}
      </select>
      <p>you select {val}</p>
    </>
  );
};

export default Example;
