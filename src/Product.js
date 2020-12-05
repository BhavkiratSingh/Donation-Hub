import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product(props) {
  const [, dispatch] = useStateValue();

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART", 
      item: {
        id: props.id,
        title: props.title,
        expiry: props.expiry,
        image: props.image
      }
    });
  }
  return (
    <div className="product">
      <div className="product__information">
        <strong>{props.title}</strong>
        <p>
          <small>{props.expiry}</small>
        </p>
      </div>
      <img
        src={props.image}
        alt="medicine"
      />
      <button onClick = {addToCart}>Add to Cart</button>
    </div>
  );
}

export default Product;
