import React from "react";
import { useHistory } from 'react-router-dom';
import { ImagePoke } from "./components/ImagePoke";
import { StatusPoke } from "./components/StatusPoke";
import { TypePoke } from "./components/TypePoke";
import { Style } from "./Style";

export default function PokedexDetails() {
    const history= useHistory()
    const voltar=()=>{
        history.goBack()
    }

    return (
        <div>
            <h1>Pokedex Details</h1>
            <button onClick={voltar}>voltar</button>
            <Style>
                <ImagePoke/>
                <StatusPoke/>
                <TypePoke/>
            </Style>
        </div>
    );
}
