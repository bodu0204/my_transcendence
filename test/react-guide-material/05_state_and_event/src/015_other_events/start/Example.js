import "./Example.css";

const Example = () => {
  return (
    <div>
      <h3>コンソールを確認してください。</h3>
      <label>
        入力値のイベント：
      <input type="text" 
        onChange={function(e){console.log('onChange:',e.target.value);}}
        onBlur={function(e){console.log('onBlur:',e.target.value);}}
        onFocus={function(e){console.log('onFocus:',e.target.value);}}
      ></input>
      </label>
      <div className="hover-event"
        onMouseEnter={function(_){console.log('onMouseEnter');}}
        onMouseLeave={function(_){console.log('onMouseLeve');}}
      ></div>
    </div>
  );
};

export default Example;
