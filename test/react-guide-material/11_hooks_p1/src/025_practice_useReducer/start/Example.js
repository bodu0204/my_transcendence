import { useReducer } from "react";

const CALC_OPTIONS = ["add", "minus", "divide", "multiply"];

const Example = () => {
  const initState = {
    a: 1,
    b: 2,
    result: 3,
  };

  const [state, dispatch] = useReducer(reducer, initState);

  function reducer(p, a){
    switch (a.type) {
      case 'a':
        return {...p, a:+a.value};
      case 'b':
        return {...p, b:+a.value};
      case CALC_OPTIONS[0]:
        return {...p, result:p.a + p.b};
      case CALC_OPTIONS[1]:
        return {...p, result:p.a - p.b};
      case CALC_OPTIONS[2]:
        return {...p, result:p.a / p.b};
      case CALC_OPTIONS[3]:
        return {...p, result:p.a * p.b};
      default:
        return {...p}
    }
  }

  const calculate = (e) => {
    dispatch({type:e.target.value});
  };

  const numChangeHandler = (e) => {
    dispatch({type:e.target.name, value:e.target.value});
  }

  return (
    <>
    <h3>練習問題</h3>
    <p>useReducerを使って完成コードと同じ機能を作成してください。</p>
      {<><div>
        a:
        <input
          type="number"
          name="a"
          value={state.a}
          onChange={numChangeHandler}
        />
      </div>
      <div>
        b:
        <input
          type="number"
          name="b"
          value={state.b}
          onChange={numChangeHandler}
        />
      </div>
      <select value={state.type} onChange={calculate}>
        {CALC_OPTIONS.map((e)=><option key={e}>{e}</option>)}
      </select>
      <h1>結果：{state.result}</h1></>}
    </>
  );
};

export default Example;
