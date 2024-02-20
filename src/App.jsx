import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let foodItems = ["Dal", "Milk", "Vegetables"];
  return (
    <>
      <h1>Hello World</h1>
      {foodItems.length === 0 && <h3>I am still hungry</h3>}
      <ul className="list-group">
        {foodItems.map((items) => (
          <li key={items} className="list-group-item">
            {items}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
