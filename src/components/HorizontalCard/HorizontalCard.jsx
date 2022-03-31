import "./HorizontalCard.css";
import { useCart } from "../../contexts/cartContext";

import { useAuth } from "../../contexts/authContext";

const HorizontalCard = ({ product }) => {
  const { _id, title, price, image } = product;

  const { cart, addToCartHandler } = useCart();
  const { isAuth, navigate } = useAuth();
  console.log(cart);
  const itemInCart = cart.find((item) => item._id === _id);

  return (
    <div className="card-wrapper basic-card card-horizontal featured-card">
      <div className="row">
        <img src={image} className="card-img" alt="Perfume" />

        <div className="card-main">
          <div className="card-bdg primary">Trending</div>

          <p className="heading">{title}</p>

          <div className="card-content">
            <div className="price">&#8377; {price}</div>
          </div>
          <button
            className="btn btn-primary"
            onClick={() =>
              isAuth && itemInCart
                ? navigate("/cart")
                : addToCartHandler(product)
            }
          >
            {isAuth && itemInCart ? "Go To Cart" : "Add To Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export { HorizontalCard };
