const Items = ({ foodItem, handleBuyButton }) => {
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
