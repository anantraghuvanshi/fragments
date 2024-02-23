const Items = ({ foodItem }) => {
  const handleBuyButtonClicked = (event) => {
    console.log(`${foodItem} is bought`);
  };

  return (
    <li className="list-group-item">
      <span>{foodItem}</span>
      <button
        className="btn btn-info btn-custom"
        onClick={(event) => handleBuyButtonClicked(event)}
      >
        Buy
      </button>
    </li>
  );
};

export default Items;
