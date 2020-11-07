import React from "react";
import { connect } from "react-redux";
import Counter from "../components/Counter";
import { increase, decrease, setDiff } from "../modules/counter";

function CounterContainer({ number, diff, onIncrease, onDecrease, onSetDiff }) {
  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
}

const mapStateToProps = state => ({
  number: state.counter.number,
  diff: state.counter.diff
});

const mapDispatchToProps = dispatch => ({
  onIncrease: () => dispatch(increase()),
  onDecrease: () => dispatch(decrease()),
  onSetDiff: diff => dispatch(setDiff(diff))
});

// const connectHoc = (state, dispatch) => {
//   return WrapMyComponent => <WrapMyComponent {...state} {...dispatch} />;
// };

// const enhance = connectHoc(mapStateToProps, mapDispatchToProps);
// const container = enhance(CounterContainer);
const enhance = connect(mapStateToProps, mapDispatchToProps);
export default enhance(CounterContainer);
