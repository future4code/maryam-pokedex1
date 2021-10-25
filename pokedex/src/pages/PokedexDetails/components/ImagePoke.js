import React from "react";
import { ImageContainer, ImagePokemonDetail } from "../Style";
import Card from '@mui/material/Card';

export const ImagePoke = (props) => {
    return (
        <ImageContainer>
            <Card sx={{ maxHeight: 245 }}>
                <ImagePokemonDetail src={props.imagefront} alt={props.alt} />
            </Card>
            <Card sx={{ maxHeight: 245 }}>
                <ImagePokemonDetail src={props.imageback} alt={props.alt} />
            </Card>
        </ImageContainer>
    )
}