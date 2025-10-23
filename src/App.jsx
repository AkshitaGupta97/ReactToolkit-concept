
import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import { decrement, increment, incrementByAmount, reset } from './Features/Counter/CounterSlice';
import { useState } from 'react';

function App() {
  const count = useSelector((state) => state.counter.value)
  const [Amount, setAmount] = useState(0);

  const dispatch = useDispatch();

  function handleIncrement() {
     dispatch(increment())
  }

  function handleDecrement() {
    dispatch(decrement())
  }

  function handleReset() {
    dispatch(reset())
  }
  
  function handleAmount() {
    dispatch(incrementByAmount(Amount))
  }

  return (
    <div className='container'>
      <h2>learn with react toolkit</h2>
      
      <button onClick={handleIncrement}>+</button>
      <h2>Count : {count} </h2>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleReset}>Reset</button>
      <hr />
      <input type="number" placeholder='enter Amount' value={Amount} onChange={(e) => setAmount(e.target.value)} />
      <button onClick={handleAmount}>Increment Amount</button>

    </div>
  )
}

export default App;
