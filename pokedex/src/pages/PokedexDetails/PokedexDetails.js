import React from "react";
import { Switch, Route, BrowserRouter, useHistory } from 'react-router-dom';

export default function PokedexDetails() {
    const history= useHistory()
    const voltar=()=>{
        history.goBack()
    }

    return (
        <div>
        <h1>Pokedex Details</h1>
        <button onClick={voltar}>voltar</button>
        </div>
    );
}
