import styled from 'styled-components'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {Button} from '@material-ui/core';
import Typography from '@mui/material/Typography';

export const CardPokedex = styled.div`
    display: inline-grid;

    margin:20px;
    justify-items:center;
    align-items:center;
    padding: 30px;
    width: 250px;
    height:250px;
    box-shadow: 4px 4px 4px 4px lightgray;

    img{
        height: 120px;
        width: 120px;
        margin-bottom:10px;
    }

    div{
        
        button{
            padding:5px;
            border: none;
            border-radius:4px ;
            margin:5px;
            margin-top:10px;
            transition: .3s ease-in-out;
            :hover{
                padding:5px;
                border: none; 
                border-radius:4px ;
                background-color:#cbcdf2;
                margin:5px;
                transition: .5s ease-in-out;
                cursor: pointer;
            }
            :active{
                padding:5px;
                border: none;
                border-radius:4px ;
                background-color:#babcf1;
                margin:5px;}
                transition: .5s ease-in-out;
                cursor: pointer;
        }
    }
`
export const Container = styled.div`
display:inline-grid;
/* flex-direction: row; */
` 