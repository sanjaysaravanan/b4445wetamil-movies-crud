// eslint-disable-next-line no-unused-vars
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {

  const dispatch = useDispatch();

  const counterReducer = useSelector(state => state.counterReducer);

  const decCounter = () => {
    dispatch({ type: 'dec_counter' });
  };

  const incCounter = () => {
    dispatch({ type: 'inc_counter' });
  };

  return <div>
    <h2>{counterReducer.count}</h2>
    <button onClick={incCounter} >Increase</button>
    <button onClick={decCounter} >Decrease</button>
  </div>
};

export default Counter;