import React from "react";
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { StatusPokeCard } from "./StatusPokeCard";

export const StatusPoke = (props) => {
    return(
        <Card>
            <CardContent>               
                <Typography variant={'h5'} align={'center'} gutterBottom>
                    Stats
                </Typography>  

                {console.log('stats', props.stats)}
                {props.stats && props.stats.map((stat)=>{
                    console.log("stat: ", stat.stat.name, stat.stat.url)
                    return <StatusPokeCard infoName={stat.stat.name} info={stat.base_stat}/>
                })}
                {/* <StatusPokeCard infoName={'Attack: '} info={'---'}/>
                <StatusPokeCard infoName={'Defense: '} info={'---'}/>
                <StatusPokeCard infoName={'Special-attack: '} info={'---'}/>
                <StatusPokeCard infoName={'Special-defense: '} info={'---'}/>
                <StatusPokeCard infoName={'Speed: '} info={'---'}/> */}
            </CardContent>    
        </Card>
    )
}

