import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Categories from "./pages/Categories";
import Search from "./pages/Search";
import Popular from "./pages/Popular";
import Moi from "./pages/Moi";
import MovieDetails from "./pages/MovieDetails";
import ActorDetails from "./pages/ActorDetails";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
    <Navigation />
      <Switch>
        <Route path="/" exact component={Popular} />
        <Route path="/search" exact component={Search} />
        <Route path="/categories" exact component={Categories} />
        <Route path="/movieDetails" exact component={MovieDetails} />
        <Route path="/actorDetails" exact component={ActorDetails} />
        <Route path="/moi" exact component={Moi} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )

}

export default App;

