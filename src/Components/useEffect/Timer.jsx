import { useEffect, useState } from "react";
const Timer = () => {
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setTimer((timer) => {
        return timer + 1;
      });
    }, 1000);
  });
  return (
    <center>
      <fieldset>
        <legend>useEffect</legend>
        <h1>I have rendered {timer} times!</h1>
      </fieldset>
    </center>
  );
};

export default Timer;
