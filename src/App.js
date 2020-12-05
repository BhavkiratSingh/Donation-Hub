/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-empty-pattern */
import { useEffect } from "react";
import "./App.css";
import Header from "./Header.js";
import Home from "./Home.js";
import Footer from "./Footer.js";
import ThanksR from "./ThanksR.js";
import ThanksD from "./ThanksD.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout.js";
import Login from "./Login";
import Request from "./Request";
import Donate from "./Donate"
import { auth } from "./firebase.js";
import { useStateValue } from "./StateProvider";

function App() {
  const [, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/request">
            <Header />
            <Request />
          </Route>
          <Route path="/donate">
            <Header />
            <Donate />
          </Route>
          <Route path = "/ThanksR">
            <Header />
            <ThanksR />
          </Route>
          <Route path = "/ThanksD">
            <Header />
            <ThanksD />
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
