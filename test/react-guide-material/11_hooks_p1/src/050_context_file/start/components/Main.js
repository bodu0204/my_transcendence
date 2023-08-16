import { useContext } from 'react';
import { Context } from '../Example';

const Main = () => {
	const [theme] = useContext(Context);
  return(
  	<main className={`content-${theme}`}>
  		<h1>テーマの切り替え</h1>
	</main>
	);
};

export default Main;
