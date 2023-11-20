import { useEffect, useState } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());

  const tick = () => {
    setDate(new Date());
  };

  const addClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    document.title = `clicked ${count} times`;
  }, [count]);

  //if array is blank , it is call for one time
  useEffect(() => {
    const interval = setInterval(() => {
      tick();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <p>Time : {date.toLocaleTimeString()}</p>
      <p>
        <button type="button" onClick={addClick}>
          Click
        </button>
      </p>
    </div>
  );
}

export default MyComponent;
