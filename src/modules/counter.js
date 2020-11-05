// action type
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";
const SET_DIFF = "counter/SET_DIFF";

// action creator
export const setDiff = diff => ({
  type: SET_DIFF,
  diff
});

export const increase = () => ({
  type: INCREASE
});

export const decrease = () => ({
  type: DECREASE
});

const initialState = {
  number: 0,
  diff: 1
};

export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        number: state.number + state.diff
      };
    case DECREASE:
      return {
        ...state,
        number: state.number - state.diff
      };
    case SET_DIFF:
      return {
        ...state,
        diff: action.diff
      };
    default:
      return state;
  }
}
