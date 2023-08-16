/* POINT 式と文
式：何らかの値を返すもの（変数に代入できるもの）
文：変数宣言、for文、if文、switch文やセミコロンで区切るもの。
*/

import "./Child.css";

const Child = ({color: c, num:n, func: f, obj:o}) => {
  return (
    <div className={`component ${c}`}>
      <h3>Hello Component</h3>
      <h3>{typeof n === 'number' ? n:''}</h3>
      <h3>{typeof f === 'function'?f():''}</h3>
      <h3>{typeof o === 'object'?  JSON.stringify(o) : ''}</h3>
    </div>
  );
};

export default Child;
