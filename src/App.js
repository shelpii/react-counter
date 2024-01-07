import { useState } from "react";

const App = () => {

  const [count, setCount] = useState(0);

  const onClickPlus = () => {
    if (count < 50) {
      setCount(count => count + 1)
    }
  }

  const onClickMinus = () => {
    if (count > -50) {
      setCount(count => count - 1)
    }
  }

  const onClickReset = () => {
    setCount(0)
  }

  const onClickRandom = () => {
    setCount(+(Math.random() * (50 - -50) + -50).toFixed(0))
  }

  return (
    <div className="App">
      <div>
        <h2>Counter</h2>
        <h1>{count}</h1>
        <button className="minus" onClick={onClickMinus} >Minus</button>
        <button className="plus" onClick={onClickPlus} >Plus</button>
        <button className="random" onClick={onClickRandom} >Random</button>
        <button className="reset" onClick={onClickReset} >Reset</button>
      </div>
    </div>
  );
}

export default App;
