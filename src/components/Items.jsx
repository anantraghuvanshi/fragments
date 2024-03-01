const Items = ({ foodItem, bought, handleBuyButton }) => {
  return (
    <li className={`list-group-item ${bought && "active"}`}>
      <span>{foodItem}</span>
      <button className="btn btn-info btn-custom" onClick={handleBuyButton}>
        Buy
      </button>
    </li>
  );
};

export default Items;
