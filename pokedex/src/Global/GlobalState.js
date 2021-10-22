import {React, useState, useEffect} from "react";
import GlobalStateContext from "./GlobalStateContext";
import axios from 'axios';
import { BASE_URL } from "../constants/url";


const GlobalState = (props) => {
    const [pokedex, setPokedex]= useState([])
    const [pokeList, setPokeList] = useState([])
    // const [pokemons, setPokemons] = useState([])


    const getPoke = () => {

        axios.get(`${BASE_URL}/pokemon/`)
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
    //         setPokemons(res.data)
            
    //     })
    //     .catch((err) => {
    //         console.log(err)
    //     })
    // }


    //seguindo aula da chijo
    // useEffect(() => {
    //     const newPokeList = []
    //     pokeList.forEach((pokemon) => {
    //         axios.get(pokemon.url)
    //             .then((response)=>{
    //                 newPokeList.push(response.data)
    //                 if (newPokeList.length === 20){
    //                     setPokemons(newPokeList)
    //                 }
    //             })
    //             .catch()
    //     })
    // }, [pokeList])


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
