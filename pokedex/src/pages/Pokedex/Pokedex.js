import {React, useContext} from "react";
import { useHistory } from 'react-router-dom';
import GlobalStateContext from "../../Global/GlobalStateContext";
import { CardPokedex } from "./Style";
import { Container } from "./Style";

export default function Pokedex(props) {
    const {states, setters, requests} = useContext(GlobalStateContext)
    const history= useHistory()
    const goBack=()=>{
        history.goBack()
    }
    const goToPokedexDetails=()=>{
        history.push("/pokedex-detalhes/:nome")
    }

    const pokedex= states.pokedex

    const pokeCards = pokedex && pokedex.map(
        (poke, indice) => {

            return (
                <Container>
                <CardPokedex>
                <img src={poke && 
                poke.sprites && 
                poke.sprites.versions['generation-v']['black-white'].animated.front_default}
                alt={props.description}/>
                <h4>{poke.name}</h4>
                <div>
                <button>Remover</button>
                <button onClick={goToPokedexDetails}>Detalhes</button>
                </div>
                </CardPokedex>
                </Container>
                

            )
        }
    )
            
    return (
        <div>
        <h1>Pokedex</h1>
        {pokeCards}
        <button onClick={goBack}>voltar</button>
        <button onClick={goToPokedexDetails}>detalhes</button>
        </div>
    );
}