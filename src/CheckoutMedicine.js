import React from "react";
import "./CheckoutMedicine.css";
import { useStateValue } from "./StateProvider";

function CheckoutMedicine(props) {
  const [, dispatch] = useStateValue();
  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: props.id,
    })
  };

  return (
    <div className="checkoutMedicine">
      <img
        className="checkoutMedicine__image"
        src={props.image}
        alt="checkout medicine"
      />
      <div className="checkoutMedicine__info">
        <p className="checkoutMedicine__title">{props.title}</p>
        {/* <p className="checkoutMedicine__title">{props.expiry}</p> */}
        {/* <br/> */}
        <p>{props.expiry}</p>
        <button onClick={removeFromCart}>Remove Medicine</button>
      </div>
    </div>
  );
}

export default CheckoutMedicine;
