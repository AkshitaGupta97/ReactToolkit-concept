
import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import { decrement, increment } from './Features/Counter/CounterSlice';

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();

  function handleIncrement() {
     dispatch(increment())
  }

  function handleDecrement() {
    dispatch(decrement())
  }

  return (
    <div className='container'>
      <h2>learn with react toolkit</h2>
      
      <button onClick={handleIncrement}>+</button>
      <h2>Count : {count} </h2>
      <button onClick={handleDecrement}>-</button>
    </div>
  )
}

export default App;
