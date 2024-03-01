import Items from "./Items";

const FoodItems = ({ items }) => {
  return (
    <ul className="list-group">
      {items.map((items) => (
        <Items key={items} foodItem={items} handleBuyButton={() => {}}></Items>
      ))}
    </ul>
  );
};

export default FoodItems;
