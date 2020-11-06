import "./App.css";
import CounterContainer from "./containers/CounterContainer";
// import "./exercise";
import TodosContainer from "./containers/TodosContainer";

function App() {
  //return <CounterContainer />;
  return (
    <>
      <CounterContainer />
      <hr />
      <TodosContainer />
    </>
  );
}

export default App;
