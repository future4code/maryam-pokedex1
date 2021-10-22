import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from "../pages/Home/Home";
import Pokedex from "../pages/Pokedex/Pokedex";
import PokedexDetails from "../pages/PokedexDetails/PokedexDetails";
import CssBaseline from '@material-ui/core/CssBaseline';


function Router() {
    return (
        <BrowserRouter>
            <CssBaseline />
            <Switch>
                <Route exact path={"/"}>
                    <Home
                        // addToPokedex={addToPokedex}
                    />
                </Route>

                <Route exact path={"/pokedex"}>
                    <Pokedex
                        // Pokedex={pokedex}
                    />
                </Route>

                <Route exact path={"/pokedex-detalhes/:nome"}>
                    <PokedexDetails />
                </Route>

                <Route>
                    <Home />
                </Route>

            </Switch>
        </BrowserRouter>
    )
}
export default Router;