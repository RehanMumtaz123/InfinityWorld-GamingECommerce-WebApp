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

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
            <Footer />
          </Route>
          {/* <Route path="/nav">
            <Nav />
            <Footer />
          </Route> */}
          <Route path="/team">
            <About />
            <Footer />
          </Route>
          <Route path="/consoles/ps5">
            <Nav />
            <PS />
            <Footer />
          </Route>
          <Route path="/consoles/xb">
            <Xbox />
            <Footer />
          </Route>
          <Route path="/games/ps5">
            <Pgam />
            <Footer />
          </Route>
          <Route path="/game/:id" component={PSscreen} />
          <Route path="/cart/:id?" component={CartScreen} />
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
