import React, { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {Button} from '@material-ui/core';
import Typography from '@mui/material/Typography';
import axios from "axios";
import { AlignPhotos } from "./CardStyle";
import { Switch, Route, BrowserRouter, useHistory } from 'react-router-dom';

export const Cards = (props) => {

    const [poke, setPoke] = useState()

    useEffect(() => {
        getPokeDetails(props.indice)
    }, [props.indice])

    const getPokeDetails = (id) =>{
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`
        axios.get(url)
        .then((res) => {
            setPoke(res.data)
            
        })
        .catch((err) => {
            console.log(err)
        })
    }
    
    const history= useHistory()

    const goToPokedexDetails=()=>{
      history.push("/pokedex-detalhes")
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <AlignPhotos>
        <CardMedia
          component="img"
          height="170"
          image={poke && 
              poke.sprites && 
              poke.sprites.versions['generation-v']['black-white'].animated.front_default}
          alt={props.description}
          style={{height: 120, width: 120}}/>
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
        <Button size="small" onClick={()=>{props.addToPokedex(poke)}}>{props.fistButton}</Button>
        <Button size="small" onClick={goToPokedexDetails}>{props.secondButton}</Button>
      </CardActions>
    </Card>
  );
}