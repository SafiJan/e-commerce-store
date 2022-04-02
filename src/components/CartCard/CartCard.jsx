import "./CartCard.css";
import { useCart } from "../../contexts/cartContext";

const CartCard = ({ product }) => {
  const { title, qty, price, image } = product;

  const {
    removeFromCartHandler,
    updateQtyHandler,
    moveToWishlistHandler,
    loading,
  } = useCart();

  return (
    <div className="card-wrapper basic-card card-horizontal">
      <div className="row">
        <img src={image} className="card-img" alt={title} />

        <div className="card-heading">
          {title}
          <div className="card-content">
            <div className="price">&#8377; {price}</div>

            <div className="card-quantity">
              Quantity:{" "}
              <button
                className="minus"
                onClick={() => updateQtyHandler(product, "decrement")}
                disabled={loading}
              >
                -
              </button>
              <input type="number" value={qty} readOnly />
              <button
                className="plus"
                onClick={() => updateQtyHandler(product, "increment")}
                disabled={loading}
              >
                +
              </button>
            </div>
          </div>
          <button
            className="btn btn-primary"
            onClick={() => moveToWishlistHandler(product)}
            disabled={loading}
          >
            Move to Wishlist
          </button>
          <button
            className="btn outline-primary"
            onClick={() => removeFromCartHandler(product)}
            disabled={loading}
          >
            Remove from Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export { CartCard };
