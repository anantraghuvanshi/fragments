const FoodInput = ({ handleKeyDown }) => {
  return (
    <input
      className="foodInput"
      type="text"
      placeholder="Enter your own item"
      onKeyDown={handleKeyDown}
    />
  );
};

export default FoodInput;
