import {React, useState} from "react";
import GlobalStateContext from "./GlobalStateContext";
import axios from 'axios';


const GlobalState = (props) => {
    const [pokedex, setPokedex]= useState([])
    const [pokeList, setPokeList] = useState([])
    // const [poke, setPoke] = useState()


    const getPoke = () => {
        const url = 'https://pokeapi.co/api/v2/pokemon/'

        axios.get(url)
        .then((res) => {
            setPokeList(res.data.results)
        })
        .catch((err) => {
            console.log(err.response)
        })
    }


    // const getPokeDetails = (id) =>{
    //     const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    //     axios.get(url)
    //     .then((res) => {
    //         setPoke(res.data)
            
    //     })
    //     .catch((err) => {
    //         console.log(err)
    //     })
    // }


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


    const states = {pokedex, pokeList}
    const setters = {setPokedex, setPokeList}
    const requests = {getPoke, addToPokedex}

    return (
        <GlobalStateContext.Provider value = {{states, setters, requests}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState
