import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let foodItems = ["Dal", "Milk", "Vegetables"];
  return (
    <>
      <h1>Hello World</h1>
      <ul class="list-group">
        {foodItems.map((items) => (
          <li class="list-group-item">{items}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
