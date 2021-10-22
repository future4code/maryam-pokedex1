import React from "react";
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { StatusPokeCard } from "./StatusPokeCard";

export const StatusPoke = () => {
    return(
        <Card>
            <CardContent>               
                <Typography variant={'h5'} align={'center'} gutterBottom>
                    status
                </Typography>               
                <StatusPokeCard infoName={'HP: '} info={'---'}/>
                <StatusPokeCard infoName={'Attack: '} info={'---'}/>
                <StatusPokeCard infoName={'Defense: '} info={'---'}/>
                <StatusPokeCard infoName={'Special-attack: '} info={'---'}/>
                <StatusPokeCard infoName={'Special-defense: '} info={'---'}/>
                <StatusPokeCard infoName={'Speed: '} info={'---'}/>
            </CardContent>    
        </Card>
    )
}