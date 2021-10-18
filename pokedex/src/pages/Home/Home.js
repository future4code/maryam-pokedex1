import React from "react";
import { Switch, Route, BrowserRouter, useHistory } from 'react-router-dom';
import Header from '../../components/Header/Header';

export default function Home() {
    const history= useHistory()

    const goToPokedex=()=>{
        history.push("/pokedex")
    }

    return (
        <div>
        <h1>Home</h1>
        <button onClick={goToPokedex}>pokedex</button>
        </div>
    );
}