import { useEffect, useRef, useState } from 'react';

function Time (){
    const [date, setDate] = useState(new Date());
    const buttonRef = useRef();
   
    
    const tick = () =>{
      setDate(new Date());
    }
     
    useEffect(()=>{
      console.log('use Effect.....')
      buttonRef.current = setInterval(tick, 1000)

      return () => {
        clearInterval(buttonRef.current);
      }      
    }, [])
    

    const stopClock = () =>{
        clearInterval(buttonRef.current);
    }

  return (
    <div>
        <p>{date.toLocaleTimeString()}</p>
        <button type="button" onClick={stopClock}>Stop</button>
        <button type="button" onClick={tick}>start</button>
    </div>
  );
}

export default Time;