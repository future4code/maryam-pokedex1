
import React, { useContext, useEffect } from "react";
import { useHistory} from 'react-router-dom';
import { Cards } from "../../components/ContainerCards/Cards";
import { CardContainer } from "./Style";
import axios from "axios";
import GlobalStateContext from "../../Global/GlobalStateContext";


export default function Home(props) {

    const {states, setters, requests} = useContext(GlobalStateContext)
    // const [pokeList, setPokeList] = useState([])
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
        requests.getPoke()
    }, [requests])

    const history= useHistory()

    const goToPokedex=()=>{
        history.push("/pokedex")
    }

    const pokeList = states.pokeList
    const pokeCards = pokeList && pokeList.map(
        (poke, indice) => {
            
            return (
                
                <Cards
                    addToPokedex={requests.addToPokedex}
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