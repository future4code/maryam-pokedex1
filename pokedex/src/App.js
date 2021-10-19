import React from "react";
import Home from "./pages/Home/Home";
import Pokedex from "./pages/Pokedex/Pokedex";
import PokedexDetails from "./pages/PokedexDetails/PokedexDetails";
<<<<<<< HEAD
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Switch, Route, BrowserRouter, useHistory } from 'react-router-dom';
import Header from "./components/Header/Header";
>>>>>>> master

function App() {
  return (
    <div>

      <BrowserRouter>
        <CssBaseline />
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
