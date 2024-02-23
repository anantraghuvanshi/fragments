import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import "./App.css";

function App() {
  let foodItems = ["Dal", "Milk", "Vegetables"];
  return (
    <>
      <Container>
        <h1>Hello World</h1>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodItems items={foodItems}></FoodItems>
      </Container>
      {/* <Container>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
          explicabo quisquam laborum facilis qui tempora reiciendis, optio
          asperiores nesciunt saepe necessitatibus architecto vitae officiis
          ipsa blanditiis dolores porro tenetur odio!
        </p>
      </Container> */}
    </>
  );
}

export default App;
