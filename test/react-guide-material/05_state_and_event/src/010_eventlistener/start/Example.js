const Example = () => {
  function click_hundler(){
    alert('clicked!!');
  }
  return (
    <>
      <button onClick={click_hundler} >click!!</button>
      <button onClick={click_hundler} >click!!</button>
    </>
  );
};

export default Example;
