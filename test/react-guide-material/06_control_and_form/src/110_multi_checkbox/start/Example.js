import { useState } from "react";

function Product({product:p, hundler:h}){
  return (
    <div>
      <input type="checkbox" value={p.label} checked={p.checked} onChange={function(e){h(function(v){
        p.checked = !p.checked;
        return([...v]);
      });}} id={"Product_"+p.label}/>
      <label htmlFor={"Product_"+p.label}>{p.label + " : " + p.value}</label>
    </div>
  )
}

const Example = () => {
  const [fruits, setFruits] = useState([
    { label: "Apple", value: 100, checked: false },
    { label: "Banana", value: 200, checked: false },
    { label: "Cherry", value: 300, checked: false },
  ]);
  let sum = 0;
  for(const el of fruits){
    sum += el.checked ? el.value : 0;
  }

  return (
    <div>
      {fruits.map(function(p){return(<Product key={p.label} product={p} hundler={setFruits}/>);})}
      <div>合計：{sum}</div>
    </div>
  );
};

export default Example;
