import {useState} from 'react'

const Example = () => {
  let [val, set_val] = useState();
  return (
    <>
      <input
        type="text"
        onChange={function(e){set_val(e.target.value)}}
        ></input>
        <p>{val}</p>
    </>
  );
};

export default Example;
