import React from "react";
import { Switch, Route, BrowserRouter, useHistory } from 'react-router-dom';
import { Cards } from "../../components/ContainerCards/Cards";
import { CardContainer } from "./Style";


export default function Pokedex(props) {
    const history= useHistory()
    const voltar=()=>{
        history.goBack()
    }
    const goToPokedexDetails=()=>{
        history.push("/pokedex-detalhes")
    }

    const pokedex= props.Pokedex

    const pokeCards = pokedex && pokedex.map(
        (poke, indice) => {

            return (
                <div>
                <img src={poke && 
                poke.sprites && 
                poke.sprites.versions['generation-v']['black-white'].animated.front_default}
                alt={props.description}/>
                <p>{poke.name}</p>
                <button>Remover</button>
                <button>Detalhes</button>
                </div>

                // <Cards
                //     addToPokedex={props.addToPokedex}
                //     title={poke.name} 
                //     text={''} 
                //     fistButton={'Remover'}
                //     secondButton={'Detalhes'}
                //     indice={indice + 1 }
                //     key={indice}
                // /> 
            )
        }
    )
            
    return (
        <div>
        <h1>Pokedex</h1>
        {pokeCards}
        <button onClick={voltar}>voltar</button>
        <button onClick={goToPokedexDetails}>detalhes</button>
        </div>
    );
}