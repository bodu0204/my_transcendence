import { useState, useRef, forwardRef, useImperativeHandle, useEffect } from "react";

const Video = forwardRef(({ path }, ref) => {

  const v_ref = useRef();
  useImperativeHandle(ref, () => ({
    start(){v_ref.current.play();},
    stop(){v_ref.current.pause();},
  }));
  useEffect(()=>{v_ref.current.loop=true;})

  return (
    <video style={{ maxWidth: "100%" }} ref={v_ref}>
      <source src={path}></source>
    </video>
  );
});

const Example = () => {
  const [playing, setPlaying] = useState(false);
  const ref = useRef();

  return (
    <div>
      <h3>練習問題</h3>
      <p>useRef、useImperativeHandle、forwardRefを使って完成系の動画再生機能を作成してください。※useImperativeHandleでplay(再生)、stop(停止)メソッドを定義すること。
</p>
      <Video ref={ref} path="./sample.mp4" />
      <button
        onClick={() => {
          if (playing){
            ref.current.stop();
          }else{
            ref.current.start();
          }
          setPlaying((prev) => !prev);
        }}
      >
        {playing ? "Stop" : "Play"}
      </button>
    </div>
  );
};

export default Example;
