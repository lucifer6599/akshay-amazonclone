import "./App.css";
import { useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import CheckoutCombined from "./CheckoutCombined";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import GuardedRoute from "./GuardedRoute";
import PaymentCombined from "./PaymentCombined";
import OrdersCombined from "./OrdersCombined";


//"src" folder is for the front-end app and "functions" folder is for all the back-end

function App() {
  const [{ basket,user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("USER IS>>>", authUser);
      if (authUser) {
        //the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <GuardedRoute
            path="/checkout"
            component={CheckoutCombined}
            auth={user}
          />
         
          <GuardedRoute
            path="/payment"
            component={PaymentCombined}
            auth={user}
          />
         <GuardedRoute
            path="/orders"
            component={OrdersCombined}
            auth={basket}
          />
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
