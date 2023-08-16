import { useRef, useState } from "react";

const Case1 = () => {
  const [value, setValue] = useState("");
  const i_ref = useRef();

  return (
    <div>
      <h3>ユースケース1</h3>
      <input type="text" ref={i_ref} value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={function(){console.log(i_ref.current); i_ref.current.focus();}}>
        インプット要素をフォーカスする
      </button>
    </div>
  );
};

const Example = () => {
  return (
    <>
      <Case1 />
    </>
  );
};

export default Example;
