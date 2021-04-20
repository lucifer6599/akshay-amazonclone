import React from "react";
import { useHistory } from "react-router-dom";
import "./Product.css";
import { useStateValue } from "./StateProvider";
function Product({ id, title, price, image, rating }) {
  const [{ basket, user }, dispatch] = useStateValue();
  const history=useHistory();
  //console.log("this is the basket>>>",basket);
  const addToBasket = () => {
    //dispatch the item into the data layer
    if (user) {
      dispatch({
        type: "ADD_TO_BASKET",
        item: {
          id: id,
          title: title,
          image: image,
          price: price,
          rating: rating,
        },
      });
    } else {
      history.push('/login')
        }
  };

  return (
    <div className="product">
      <div className="product__info">
        <p className="">{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} alt="image" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
