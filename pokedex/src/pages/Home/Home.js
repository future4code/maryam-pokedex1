
import React, { useState, useEffect } from "react";
import { useHistory} from 'react-router-dom';
import { Cards } from "../../components/ContainerCards/Cards";
import { CardContainer } from "./Style";
import axios from "axios";


export default function Home(props) {
    const [pokeList, setPokeList] = useState([])
    // const [pokedex, setPokedex]= useState([])

    // const addToPokedex = (pokemonToAdd) => {
    //     const position = pokedex.findIndex((pokemon) => {
    //         return pokemon.id === pokemonToAdd.id;
    //     });

    //     const newPokedex = [...pokedex];

    //     if (position === -1) {
    //         newPokedex.push({ ...pokemonToAdd });
    //     }

    //     setPokedex(newPokedex);
    //     // console.log("id chegando",pokemonToAdd.id)
    //     // console.log("pokedex chegando",pokedex)
    // }

    useEffect(() => {
        getPoke()
    }, [])

    const history= useHistory()

    const goToPokedex=()=>{
        history.push("/pokedex")
    }

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

    const pokeCards = pokeList && pokeList.map(
        (poke, indice) => {
            
            return (
                
                <Cards
                    addToPokedex={props.addToPokedex}
                    title={poke.name} 
                    text={''} 
                    fistButton={'Adicionar'}
                    secondButton={'Detalhes'}
                    indice={indice + 1 }
                    key={indice}
                />
            )
        }
    )

    return (
        <div>
            <h1>Home</h1>
            <button onClick={goToPokedex}>pokedex</button>
            <CardContainer>
                {pokeCards}
            </CardContainer>
        </div>
    );
}