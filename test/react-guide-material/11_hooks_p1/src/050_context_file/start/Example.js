import { createContext, useState } from "react";
import "./Example.css";
import Handler from './components/Header'
import Main from './components/Main'

export const Context=createContext();

const Example = () => {
  const [theme, setTheme] = useState('light')
  
  const theme_handler = (e) => setTheme(e.target.value)

  return (
    <Context.Provider value={[theme, theme_handler]}>
      <Handler/>
      <Main/>
    </Context.Provider>
  );
};

export default Example;
