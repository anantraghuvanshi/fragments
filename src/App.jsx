import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import "./App.css";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  let [textToShow, setTextMethod] = useState();
  let { foodItems, setFoodItems } = useState(["Dal", "Milk", "Vegetables"]);
  const handleOnchange = () => {
    console.log(event.target.value);
    setTextMethod(event.target.value);
  };
  return (
    <>
      <Container>
        <h1>Hello World</h1>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodInput handleOnchange={handleOnchange}></FoodInput>
        <FoodItems items={foodItems}></FoodItems>
      </Container>
    </>
  );
}

export default App;
