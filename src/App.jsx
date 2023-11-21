import React, { useReducer } from 'react';
import ComponentA from "./components/UseReduce/ComponentA";

export  const counterContext = React.createContext();

const initalState = 0;

const reducer = (state, action) =>{
   switch(action){
     case 'increment':
      return state + 1;
     case 'decrement':
      return state - 1;
    default:
      return state;
   }
}
function App() {
  const [count, dispatch] =  useReducer(reducer, initalState);

  return (
    <div className="app">
      <div> Count : {count}</div>

      <counterContext.Provider value={{countDispatch: dispatch }}>
            <ComponentA />
      </counterContext.Provider>
    </div>
  );
}

export default App;
