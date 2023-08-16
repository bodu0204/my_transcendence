import { useState } from "react";

function Counter({title:t, count:c, set_counter:sc}){
  const countUp = () => {
    sc(function(p){return (p+1);});
  };
  const countDown = () => {
    sc(function(p){return (p>0?p-1:0);});
  };
  return (
    <>
      <h3>{t}: {c}</h3>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
}

const Example = () => {
  const [b, s_b] = useState(true);
  const [ca, s_ca] = useState(0);
  const [cb, s_cb] = useState(0);

  return (<>
  <button onClick={function(e){s_b(!b);}}>change</button>
  {b?<Counter title="A"count={ca} set_counter={s_ca}/>:<Counter title="B"count={cb} set_counter={s_cb}/>}
  </>);
};

export default Example;
