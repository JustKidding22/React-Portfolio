import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <HashRouter>
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/resume" component={Resume} />
          <Route render={() => <h1 className="display-2">Wrong page!</h1>} />
        </Switch>
        <Footer />
      </>
    </HashRouter>
  );
}

export default App;
