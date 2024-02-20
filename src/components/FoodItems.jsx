const FoodItems = () => {
  let foodItems = ["Dal", "Milk", "Vegetables"];
  return (
    <ul className="list-group">
      {foodItems.map((items) => (
        <li key={items} className="list-group-item">
          {items}
        </li>
      ))}
    </ul>
  );
};

export default FoodItems;
