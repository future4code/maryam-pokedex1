import React from "react";
import styled from "styled-components"

const ContainerTypes=styled.div`
display: grid;
box-shadow: 3px 3px 3px 3px lightgray;
margin: 20px;
padding:10px;
justify-items: center;
align-items: center;
p{
    margin: 10px;
}
h3{
    margin: 10px;
}
`

export const TypePoke = (props) => {
    return (
    <div>
        <ContainerTypes>
            <h3>Type Poke</h3>
            {/* <strong>{props.typeName}</strong> */}
            <div>
                <p>tipo 1</p>
                <p>tipo 2</p>
            </div>
        </ ContainerTypes>
        <ContainerTypes>
            <h3>Attack Types</h3>
            {/* <strong>{props.attackName}</strong> */}
            <p>attack1</p>
            <p>attack2</p>
            <p>attack3</p>
            <p>attack4</p>
        </ContainerTypes>
        
    </div>
    )
}