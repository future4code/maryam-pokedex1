import React, { useContext, useEffect, useState } from "react";
import GlobalStateContext from "../../Global/GlobalStateContext";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import axios from "axios";
import { AlignPhotos } from "./CardStyle";
import { useHistory } from 'react-router-dom';
import { BASE_URL } from "../../constants/url";

export const Cards = (props) => {
  const {states, setters, requests} = useContext(GlobalStateContext)
  const [poke, setPoke] = useState()
  // const poke = states.poke;
  useEffect(() => {
    getPokeDetails(props.indice)
  }, [props.indice])

  const getPokeDetails = (id) =>{
      // const url = `https://pokeapi.co/api/v2/pokemon/${id}`
      axios.get(`${BASE_URL}/pokemon/${id}`)
      .then((res) => {
          setPoke(res.data)

      })
      .catch((err) => {
          console.log(err)
      })
  }

  const history = useHistory()

  const goToPokedexDetails = () => {
    history.push("/pokedex-detalhes/:nome")
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <AlignPhotos>
        <CardMedia
          component="img"
          height="170"
          width="150"
          image={poke &&
            poke.sprites &&
            poke.sprites.versions['generation-v']['black-white'].animated.front_default}
          alt={props.description}
          style={{ height: 120, width: 125 }} />
      </AlignPhotos>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => { props.addToPokedex(poke) }}>{props.fistButton}</Button>
        <Button size="small" onClick={goToPokedexDetails}>{props.secondButton}</Button>
      </CardActions>
    </Card>
  );
}