import React from "react";
import Home from "./pages/Home/Home";
import Pokedex from "./pages/Pokedex/Pokedex";
import PokedexDetails from "./pages/PokedexDetails/PokedexDetails";
import { Switch, Route, BrowserRouter, useHistory } from 'react-router-dom';
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <Header/>
      <BrowserRouter>
        <Switch>

          <Route exact path={"/"}>
            <Home />
          </Route>

          <Route exact path={"/pokedex"}>
            <Pokedex />
          </Route>

          <Route exact path={"/pokedex-detalhes"}>
            <PokedexDetails />
          </Route>

          <Route>
            <Home />
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
