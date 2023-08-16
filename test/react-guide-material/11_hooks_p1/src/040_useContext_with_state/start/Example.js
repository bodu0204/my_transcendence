import { createContext, useState } from "react";
import Child from "./components/Child";
import OtherChild from "./components/OtherChild";
export const MyContext = createContext();

const Example = () => {
  return (
    <>
      <MyContext.Provider value={useState(0)}>
        <Child />
        <OtherChild />
      </MyContext.Provider>
    </>
  );
};

export default Example;
