import React from "react";
import { Switch, Route, BrowserRouter, useHistory } from 'react-router-dom';

export default function Pokedex() {
    const history= useHistory()
    const voltar=()=>{
        history.goBack()
    }
    const goToPokedexDetails=()=>{
        history.push("/pokedex-detalhes")
    }

    return (
        <div>
        <h1>Pokedex</h1>
        <button onClick={voltar}>voltar</button>
        <button onClick={goToPokedexDetails}>detalhes</button>
        </div>
    );
}