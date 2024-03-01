const FoodInput = () => {
  const handleOnchange = () => {};

  return (
    <input
      className="foodInput"
      type="text"
      placeholder="Enter your own item"
      onChange={handleOnchange()}
    />
  );
};

export default FoodInput;
