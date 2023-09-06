import { useEffect, useState } from 'react'
const Example = () => {
  const [t, st] = useState(0);
  useEffect(()=>{window.setInterval(()=>st((v)=>v + 1), 1000);},[]);
  return (<>
    <h1>The {t}s</h1>
  </>);
};

export default Example;
