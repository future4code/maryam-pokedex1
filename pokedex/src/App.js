import React from "react";
import GlobalState from "./Global/GlobalState";
import Router from './routes/Router';

function App() {
//   const [pokedex, setPokedex]= useState([])

//   const addToPokedex = (pokemonToAdd) => {
//     const position = pokedex.findIndex((pokemon) => {
//         return pokemon.id === pokemonToAdd.id;
//     });

//     const newPokedex = [...pokedex];

//     if (position === -1) {
//         newPokedex.push({ ...pokemonToAdd });
//     }

//     setPokedex(newPokedex);
//     console.log("id chegando",pokemonToAdd.id)
//     console.log("pokedex chegando",pokedex)
// }

  return (
    <GlobalState>
      <Router />
      
    </GlobalState>
  );
}

export default App;
