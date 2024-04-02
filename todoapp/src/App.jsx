import './App.css'
import { useAppDispatch, useAppSelector } from './Redux/hooks'
import { increment, decrement } from './Redux/slices/counter'
import MyComponent from './Redux/myComponent'
function App() {
  const count = useAppSelector((state) => state.counter)
  const dispatch = useAppDispatch()
  return (
    <>
      <h1>Redux Tool kit</h1>
      <h2>Count is {count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <MyComponent />
    </>
  )
}

export default App
