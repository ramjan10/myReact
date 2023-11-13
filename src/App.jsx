import Clock from "./components/Clock";
import ClockList from "./components/ClockList";

function App() {
  const quantities = [1, 2, 3];
  
  return (
    <div>
      <Clock local="bn-Bd" />
      
      <p>............Clock List Component...........</p>
      <ClockList quantities={quantities}/>

    </div>
  );
}

export default App;
