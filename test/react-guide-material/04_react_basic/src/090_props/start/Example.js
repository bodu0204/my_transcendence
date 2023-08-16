import Child from "./components/Child";


const Example = () => {
	function fn(arg){
		return (`hello ${arg}`);
	}
		return(
		<>
			<Child num={42}/>
			<Child color="red"/>
			<Child func={fn}/>
			<Child obj={{name:'apple', price:398}}/>
		</>
	);
}

export default Example;
