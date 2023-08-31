import { useEffect } from 'react';
import axios from 'axios'
const Example = () => {
  useEffect(()=>{
    axios.get('http://localhost:3003').then(req=>{
      console.log(req.data);
    });
  }, []);
  return (
    <p style={{ textAlign: "center" }}>
      startフォルダの内容が表示されます。
      <br />
      練習用に使ってください！
    </p>
  );
};

export default Example;
