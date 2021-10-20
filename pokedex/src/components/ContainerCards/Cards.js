import React, { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {Button} from '@material-ui/core';
import Typography from '@mui/material/Typography';
import axios from "axios";

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
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={poke && 
            poke.sprites && 
            poke.sprites.versions['generation-v']['black-white'].animated.front_default}
        
        alt={props.description}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{props.fistButton}</Button>
        <Button size="small">{props.secondButton}</Button>
      </CardActions>
    </Card>
  );
}