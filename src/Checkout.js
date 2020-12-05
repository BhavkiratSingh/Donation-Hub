import React from "react";
import "./Checkout.css";
import CheckoutMedicine from "./CheckoutMedicine";
import { useStateValue } from "./StateProvider";
import { db } from "./firebase.js";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  // const [order, setOrders] = useState([]);
  // useEffect(() => {
  //   if (user) {
  //     db.collection("user")
  //       .doc(user?.email)
  //       .collection("orders")
  //       .orderBy("created", "desc")
  //       .onSnapshot((snap) =>
  //         setOrders(
  //           snap.docs.map((doc) => ({
  //             id: doc.id,
  //             data: doc.data(),
  //           }))
  //         )
  //       );
  //   } else {
  //     setOrders([]);
  //   }
  // }, [user]);

  const placeOrder = (e) => {
    e.preventDefault();
    db.collection("user")
      .doc(user?.email)
      .collection("orders")
      .doc(user?.email)
      .set({
        basket: basket,
      });

    dispatch({
      type: "EMPTY_CART",
    });
  };

  return (
    <div className="checkout">
      <div className="checkout__left">
        <div>
          <h2 className="checkout__title">Your Cart</h2>
          {/* {order.data.basket?.map((item) => (
            <CheckoutMedicine
              id={item.id}
              title={item.title}
              expiry={item.expiry}
              image={item.image}
            />
          ))} */}
          {basket.map((item) => (
            <CheckoutMedicine
              id={item.id}
              title={item.title}
              expiry={item.expiry}
              image={item.image}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <div className="order">
          <div className="address">
            <h3>Delivery Address</h3>
            <form action="submit">
              <input type="text"></input>
              <br />
              <button className="placeOrder__button" onClick={placeOrder}>
                Place Order
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
