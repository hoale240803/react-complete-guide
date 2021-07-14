import React from "react";
import Button from "../../UI/Button/Button";
import {
  dispatchIncrement,
  dispatchDecrement,
  dispatchDecrementByAmount,
  dispatchIncrementByAmount,
  dispatchToggleCounter,
} from "../../../redux_test/counter/counter.action";
import COUNTER_ACTION_TYPES from "../../../redux_test/counter/counter.actiontypes";
import { useDispatch, useSelector } from "react-redux";

function ReduxCounter() {
  const dispatchCounter = useDispatch();
  const counterValue = useSelector((state) => state.counter);
  const isOn = useSelector((state) => state.isShowCounter);

  const handleIncrementCounter = () => {
    dispatchCounter({
      type: COUNTER_ACTION_TYPES.INCREMENT,
    });
  };
  const handleIncrementCounterByAmount = () => {
    dispatchCounter({
      type: COUNTER_ACTION_TYPES.INCREMENT_BY_AMOUNT,
      payload: 10,
    });
  };
  const handleDecrementCounter = () => {
    dispatchCounter({
      type: COUNTER_ACTION_TYPES.DECREMENT,
    });
  };
  const handleDecrementCounterByAmount = () => {
    dispatchCounter({
      type: COUNTER_ACTION_TYPES.DECREMENT_BY_AMOUNT,
      payload: 10,
    });
  };
  const handleToggleCounter = () => {
    dispatchCounter({
      type: COUNTER_ACTION_TYPES.TOGGLE_COUNTER,
    });
  };

  return (
    <React.Fragment>
      <h1>{counterValue}</h1>
      <p>Light is {isOn ? "ON" : "OFF"}</p>
      <Button onClick={handleIncrementCounter}>Increment</Button>
      <Button onClick={handleIncrementCounterByAmount}>Increment By Ten</Button>
      <Button onClick={handleDecrementCounter}>Decrement</Button>
      <Button onClick={handleDecrementCounterByAmount}>Decrement By Ten</Button>
      <Button onClick={handleToggleCounter}>Toggle Counter</Button>
    </React.Fragment>
  );
}

export default ReduxCounter;

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   };
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({ type: 'increment' }),
//     decrement: () => dispatch({ type: 'decrement' }),
//   }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
