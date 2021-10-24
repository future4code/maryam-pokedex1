import React, { useEffect, useContext, useState } from "react";
import { useHistory } from 'react-router-dom';
import { ImagePoke } from "./components/ImagePoke";
import { StatusPoke } from "./components/StatusPoke";
import { TypePoke } from "./components/TypePoke";
import { Style } from "./Style";
import {useParams} from "react-router-dom";
import GlobalStateContext from "../../Global/GlobalStateContext";



export default function PokedexDetails() {
    const [pokemonDetail, setPokemonDetail] = useState({})
    const {states} = useContext(GlobalStateContext)
    const history= useHistory()
    const voltar=()=>{
        history.goBack()
    }
    
    const pokemons = states.pokemons

    const {name} = useParams()
    console.log(pokemons)
    useEffect(() => {
        const currentPokemon = pokemons.find((pokemon) => {
            return pokemon.name === name
        })
            setPokemonDetail(currentPokemon)
        
    }, [])
    console.log("detalhe", pokemonDetail)
    return (
        <div>
            <h1>Pokedex Details</h1>
            <button onClick={voltar}>voltar</button>
            <Style>
                <ImagePoke 
                    imagefront={pokemonDetail &&
                        pokemonDetail.sprites &&
                        pokemonDetail.sprites.front_default}
                    imageback={pokemonDetail &&
                        pokemonDetail.sprites &&
                        pokemonDetail.sprites.back_default}
                    alt={pokemonDetail &&
                        pokemonDetail.name &&
                        pokemonDetail.name}
                />
                <StatusPoke
                    stats={pokemonDetail &&
                        pokemonDetail.stats &&
                        pokemonDetail.stats}
                />
                <TypePoke types={pokemonDetail &&
                        pokemonDetail.types}
                    moves={pokemonDetail &&
                        pokemonDetail.moves}/>
            </Style>
        </div>
    );
}
