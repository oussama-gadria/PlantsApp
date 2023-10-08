
const QuantityButton = ({quantity, setQuantity, quantityMax }) => {
  const addQuantity = () => {
    if (quantity < quantityMax) {
      setQuantity(quantity + 1);
    }
  };
  const minusQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };
  return (
    <div className="ml-3 flex items-center border border-gray-200 rounded-md">
      <button
        type="button"
        className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
        onClick={minusQuantity}
      >
        -
      </button>
      <input
        type="number"
        id="Quantity"
        value={quantity}
        className="h-10 w-4 border-transparent text-center [-moz-appearance:_textfield] text-md [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
      />
      <button
        type="button"
        className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
        onClick={addQuantity}
      >
        +
      </button>
    </div>
  );
};
export default QuantityButton;
