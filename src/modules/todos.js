import { ConcatSource } from "webpack-sources";

// action types
const ADD_TODO = "todos/ADD_TODO";
const TOGGLE_TODO = "todos/TOGGLE_TODO";

// aciton creator
let nextId = 0;
export const addTodo = text => {
  return {
    type: ADD_TODO,
    payload: {
      id: nextId++,
      text
    }
  };
};

export const toggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    payload: {
      id
    }
  };
};

const initialState = [];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.payload);
    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.payload.id
          ? {
              ...todo,
              done: !todo.done
            }
          : todo
      );
    default:
      return state;
  }
}
