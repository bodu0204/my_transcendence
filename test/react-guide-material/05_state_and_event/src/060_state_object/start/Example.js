import { useState } from "react";

const Example = () => {
  const [personObj,s_personObj] = useState({ name: "Tom", age: 18 });
  return (
    <>
      <h3>NAME:{personObj.name}</h3>
      <h3>NAME:{personObj.age}</h3>
      <input type="text" value={personObj.name} onChange={function(e){s_personObj({name:e.target.value,age:personObj.age});}}></input>
      <input type="number" value={personObj.age} onChange={function(e){s_personObj({name:personObj.name,age:e.target.value});}}></input>
      <div>
        <button onClick={function(e){s_personObj({ name: "Tom", age: 18 });}}>reset</button>
      </div>
    </>
  );
};

export default Example;
