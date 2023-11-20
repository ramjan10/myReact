import { useState } from "react";
import MyComponent from "./components/useEffect/MyComponent";

function App() {
  const [show, setShow] = useState(true);

  const display = () => {
    setShow((prevShow) => !prevShow);
  };

  return (
    <div>
      <div>{show && <MyComponent />}</div>

      <button type="button" onClick={display}>
        ShowHide
      </button>
    </div>
  );
}

export default App;
