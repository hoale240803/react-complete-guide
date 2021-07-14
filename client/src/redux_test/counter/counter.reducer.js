import COUNTER_ACTION_TYPES from "./counter.actiontypes";

const initialState = {
  isShowCounter: false,
  counter: 0,
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case COUNTER_ACTION_TYPES.INCREMENT:
      state.counter++;
      return {
        ...state,
        counter: state.counter,
      };
    case COUNTER_ACTION_TYPES.INCREMENT_BY_AMOUNT:
      console.log("THE AMOUNT RECEIVED", action.payload);
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    case COUNTER_ACTION_TYPES.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case COUNTER_ACTION_TYPES.DECREMENT_BY_AMOUNT:
      return {
        ...state,
        counter: state.counter - action.payload,
      };
    case COUNTER_ACTION_TYPES.TOGGLE_COUNTER:
      return {
        ...state,
        isShowCounter: !state.isShowCounter,
      };
    default:
      return state;
  }
}

export default counterReducer;
