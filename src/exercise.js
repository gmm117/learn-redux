import { createStore } from "redux";

// action type
const INCREASE = "INCLEASE";
const DECREASE = "DECREASE";
const CHANGE_TO_TEXT = "CHANGE_TO_TEXT";
const ADD_TO_ITEM = "ADD_TO_ITEM";

// action creator
const increase = () => {
  return {
    type: INCREASE
  };
};

const descrease = () => {
  return {
    type: DECREASE
  };
};

const changeToText = text => {
  return {
    type: CHANGE_TO_TEXT,
    payload: {
      text
    }
  };
};

const addToItem = data => {
  return {
    type: ADD_TO_ITEM,
    payload: {
      item: data
    }
  };
};

const initializeState = {
  counter: 0,
  text: "",
  list: []
};

function reducer(state = initializeState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1
      };
    case CHANGE_TO_TEXT:
      return {
        ...state,
        text: action.payload.text
      };
    case ADD_TO_ITEM:
      return {
        ...state,
        list: [...state.list, action.payload.item]
      };
    default:
      return state;
  }
}

const store = createStore(reducer);
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(increase());
store.dispatch(descrease());
store.dispatch(addToItem(123));
store.dispatch(changeToText("rooroo"));

unsubscribe();
