import Typography from '@mui/material/Typography';
import React from "react";

export const StatusPokeCard = (props) => {
    return (
        <Typography variant={'body1'}>
            <strong>{props.infoName}</strong>: {props.info}
        </Typography>
    )
}