import React from "react";
import "./App.css";
import CounterContainer from "./containers/CounterContainer";
// // import "./exercise";
import TodosContainer from "./containers/TodosContainer";
import EnhancedMyComponent from "./EnhanceHoc";

function App() {
  //return <CounterContainer />;
  return (
    <>
      <CounterContainer />
      <hr />
      <TodosContainer />
      <EnhancedMyComponent />
    </>
  );
}

export default App;
