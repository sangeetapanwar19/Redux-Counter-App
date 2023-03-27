import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { incNumber,decNumber } from './actions';

const App = () =>{
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return(
    <div>
      <h1>Counter using redux</h1>
      <div className="counter">
        <a className="counter-minus" onClick={() => dispatch(decNumber(5)) }><span>-</span></a>
        <input type="text" className="counter-input" value={myState}/>
        <a className="counter-plus" onClick={() => dispatch(incNumber(5)) }><span>+</span></a>
      </div>
    </div>
  )
}

export default App;