import { useCallback, useMemo, useState } from 'react';
import Button from "./components/CallBackAndMemo/Button";
import ShowCount from './components/CallBackAndMemo/ShowCount';
import Title from "./components/CallBackAndMemo/Title";

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrementByOne = useCallback(() =>{
    setCount1((prevCount) => prevCount +1);
  }, []);

  const incrementByFive = useCallback(() =>{
    setCount2((prevCount)=> prevCount + 5);
  }, []);

  const isEventOrOdd = useMemo(() =>{
    let i=0;
    while(i < 1000000000) i +=1;
    console.log(i);
    return count1 % 2 === 0;
  }, [count1]);
  
  return (
    <div className="App">
      <Title />
      <ShowCount count={count1} title="Counter 1"/>
      <span>{ isEventOrOdd ? 'Even' : 'Odd' }</span>
      <Button handleClick={incrementByOne}>Increment By One</Button>
      <hr />
      <ShowCount count={count2} title="Counter 2"/>
      <Button handleClick={incrementByFive}>Increment By Five</Button>
      
    </div>
  );
}

export default App;
