import { useEffect, useState } from "react";

const Example = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    console.log('useEffect is called');
    const interval=window.setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000);
    return ()=>clearInterval(interval);
  }, [])
  
  return (
    <h3>
      <time>{time}</time>
      <span>秒経過</span>
    </h3>
    );
};

export default Example;
