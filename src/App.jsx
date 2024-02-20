import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <ErrorMessage></ErrorMessage>
      <FoodItems></FoodItems>
    </>
  );
}

export default App;
