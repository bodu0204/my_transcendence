import {useState} from "react"

const Example = () => {
const [isChecked, setv] = useState(false);
  return (
    <>
    <input
    type="checkbox"
    id ="my-check"
    checked={isChecked}
    onChange={(e) => setv(!isChecked)}
    />
    <div>{isChecked ? "ON" : "OFF"}</div>
    </>
  );
};

export default Example;