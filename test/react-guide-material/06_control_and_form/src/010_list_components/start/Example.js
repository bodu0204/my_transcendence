
const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  const animal_list = [];
  for (const animal of animals) {
    animal_list.push(<li key={animal}>{animal}</li>);
  }
  return (
    <>
      <h3>配列の操作</h3>
      <ul>
        {animal_list}
        {animals.map(function(animal){return (<li key={"hello" + animal}>{"hello " +  animal}</li>)})}
      </ul>
    </>
  );
};

export default Example;
