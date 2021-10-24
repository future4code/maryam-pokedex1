import styled from "styled-components";

export const Style = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 32px;
`
export const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const ImagePokemonDetail = styled.img`
    width: 20vw;
`