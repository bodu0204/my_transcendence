import { myContext } from '../Example'
const GrandChild = () => {
  return (
      <div style={{ border: "1px solid black" }}>
        <h3>孫コンポーネント</h3>
        {myContext}
      </div>
  );
};
export default GrandChild;
