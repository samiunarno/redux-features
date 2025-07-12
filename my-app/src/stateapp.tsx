import { increament, decreament } from "./redux/feature/counter/counterslice";
import { useAppSelector, useAppDispatch } from "./redux/hook";

function App() {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);

  const handleIncrement = (amount: number) => {
    dispatch(
      increament({
        amount: amount,
      })
    );
  };

  const handleDecrement = (amount: number) => {
    dispatch(decreament({ amount }));
  };

  return (
    <div>
      <h1>Counter With Redux</h1>
      <button onClick={() => handleIncrement(5)}>Increament 5+</button>
      <button onClick={() => handleIncrement(1)}>Increament</button>
      <div>{count}</div>

      <button onClick={() => handleDecrement(5)}>Decreament 5- </button>

      <button onClick={() => handleDecrement(1)}>Dec</button>
    </div>
  );
}

export default App;
