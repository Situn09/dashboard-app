import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import { displayData, getValue } from './store/actions';
import counterSlice from './store/slice';


const styles = {
  root:{
    padding: '5px'
  }
}
function App() {

  // to get the value from global store useing useSelector hook
  const value = useSelector(getValue);
  const dispatch = useDispatch();

  
  const displayData =useSelector((state)=>state.data)
  console.log(displayData);
  const increase = ()=>{

    // update global store value useing dipatch an action
    dispatch(counterSlice.actions.increment());
  }
  const decrease = ()=>{
    dispatch(counterSlice.actions.decrement());
  }
  const incrementByAmount = ()=>{
    dispatch(counterSlice.actions.incrementByAmount(4));

  }

  return (
    <>
    <div className="App">
      {value}
    </div>
    <div onClick={increase}>increase</div>
    <div onClick={decrease}>decrease</div>
    <div onClick={incrementByAmount}>incrementByAmount 4</div>
    </>
  );
}

export default App;
