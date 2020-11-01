import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import { useStateValue } from "./StateProvider"
import { auth } from './firebase';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';


const promise = loadStripe(
  "pk_test_51HgCFSIuAm7z2ljmDdQhRlJUhidfKXE2HVgtDvhfaIqK4oVKguEqNbLqnLrWRsV8yz20kymJePWZsDCjTlKWz8NN00JVZ58IEh"
);

function App() {

  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        })
      }
      else {
        // user is logged out
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }
    });

    return () => {
      // clean up operation goes here
      unsubscribe();
    }
  }, []);
  console.log('USER IS >>>>>', basket);


  return (
    <Router>
      <div className="app">
        <Switch>

        <Route path="/orders">
            <Orders />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>

          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
