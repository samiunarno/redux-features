import { increament, decreament } from "./redux/feature/counter/counterslice";
import { useAppSelector, useAppDispatch } from "./redux/hook";

function App() {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);

  const handleIncrement = () => {
    dispatch(increament());
  };

  const handleDecrement = () => {
    dispatch(decreament());
  };

  return (
    <div>
      <h1>New React</h1>
      <button onClick={handleIncrement}>Increament</button>
      <div>{count}</div>
      <button onClick={handleDecrement}>Decreament</button>
    </div>
  );
}

export default App;
