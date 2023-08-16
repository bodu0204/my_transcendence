import { useState } from "react";

const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  let [val, s_val] = useState('');
  return (
    <>
      <h3>配列のフィルター</h3>
      <input onChange={function(e){s_val(e.target.value);}}></input>
      <ul>
        {animals.filter(function(v){return (v.toLowerCase().indexOf(val.toLowerCase()) !== -1);})
          .map((animal) => (
          <li key={animal}>{animal}</li>
        ))}
      </ul>
    </>
  );
};

export default Example;
