
import React, { useState, useEffect } from "react";
import { useHistory} from 'react-router-dom';
import { Cards } from "../../components/ContainerCards/Cards";
import { CardContainer } from "./Style";
import axios from "axios";


export default function Home() {

    const [pokeList, setPokeList] = useState([])

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
            console.log(res.data.results)
        })
        .catch((err) => {
            console.log(err.response)
        })
    }

    const pokeCards = pokeList && pokeList.map(
        (poke, indice) => {
            
            return (
                
                <Cards
                    
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