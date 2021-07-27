import React from "react";
import Home from "./Components/Home";
import Footer from "./Components/footer";
import About from "./Components/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./Components/Register";
import PS from "./Components/PS";


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
            <Footer />
          </Route>
          <Route path="/team">
            <About />
            <Footer />
          </Route>
          <Route path="/consoles/ps5">
            <PS />
            <Footer />
           </Route>
          <Route path="/register">
            <Register />
          </Route> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
