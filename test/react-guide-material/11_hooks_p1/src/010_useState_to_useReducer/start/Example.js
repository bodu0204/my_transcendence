import {useReducer, useState} from "react";

const Example = () => {
  const [state, s_st] = useState(0);
  const [rd, s_rd] = useReducer((x, a)=> a==='+'?++x : a==='-'?--x : x, 0);

  return (
    <>
    <h3>{state}</h3>
    <button onClick={()=>s_st(state + 1)}>+</button>
    <h3>{rd}</h3>
    <button onClick={()=>s_rd('+')}>+</button>
    <button onClick={()=>s_rd('-')}>-</button>
    </>
  );
};

export default Example;
