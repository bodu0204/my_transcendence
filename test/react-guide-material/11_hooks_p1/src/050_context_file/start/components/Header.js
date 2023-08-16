import { Context } from '../Example';
import { useContext } from 'react';

const Header = () => {
	const THEMES = ['light', 'dark', 'red'];
	const [theme, changeTheme] = useContext(Context);

	return (
	<header className={`content-${theme}`}>
	{THEMES.map((v)=>(<label key={`label-${v}`}><input type="radio" onChange={changeTheme} value={v} checked={theme===v}/>{v}</label>))}
  	</header>
  );
};

export default Header;
