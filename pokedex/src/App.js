import React, {useState} from "react";
import Home from "./pages/Home/Home";
import Pokedex from "./pages/Pokedex/Pokedex";
import PokedexDetails from "./pages/PokedexDetails/PokedexDetails";
// <<<<<<< HEAD
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
// import Header from "./components/Header/Header";
// >>>>>>> master

function App() {
  const [pokedex, setPokedex]= useState([])

  const addToPokedex = (pokemonToAdd) => {
    const position = pokedex.findIndex((pokemon) => {
        return pokemon.id === pokemonToAdd.id;
    });

    const newPokedex = [...pokedex];

    if (position === -1) {
        newPokedex.push({ ...pokemonToAdd });
    }

    setPokedex(newPokedex);
    console.log("id chegando",pokemonToAdd.id)
    console.log("pokedex chegando",pokedex)
}

  return (
    <div>

      <BrowserRouter>
        <CssBaseline />
        <Switch>


          <Route exact path={"/"}>
            <Home 
            addToPokedex={addToPokedex}
            />
          </Route>

          <Route exact path={"/pokedex"}>
            <Pokedex 
            Pokedex={pokedex}
            />
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
