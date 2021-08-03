import React from "react";
import Home from "./Components/Home";
import Footer from "./Components/footer";
import About from "./Components/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./Components/Register";
import Xbox from "./Components/XB";
import Pgam from "./Components/PGam";
import PS from "./Components/PS";
import CartScreen from "./Components/Cart";
import Nav from "./Components/Navigation";
import PSscreen from "./Components/PS-screen";
import XBscreen from "./Components/XB-screen";
import XB from "./Components/XGam";
import Shippingaddress from "./Components/Shippingaddress";
import paymentMethodscreen from "./Components/paymentMethodscreen";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Nav />
            <Home />
            <Footer />
          </Route>
          <Route path="/team">
            <Nav />
            <About />
            <Footer />
          </Route>
          <Route path="/consoles/ps5">
            <Nav />
            <PS />
            <Footer />
          </Route>
          <Route path="/consoles/xb">
            <Nav />
            <Xbox />
            <Footer />
          </Route>
          <Route path="/games/ps5">
            <Nav />
            <Pgam />
            <Footer />
          </Route>
          <Route path="/games/xb">
            <XB />
            <Footer />
          </Route>
          <Route path="/Nav">
            {/* <X/> */}
            <Nav />
          </Route>
          <Route path="/game/:id" component={PSscreen} />
          <Route path="/shipping" component={Shippingaddress} />
          <Route path="/xgame/:id" component={XBscreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/register" component={Register} />
          <Route path="/payment" component={paymentMethodscreen} />
          {/* <Nav />
            <PSscreen /> */}
          {/* <Footer /> */}
          {/* </Route> */}
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
