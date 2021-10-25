import React from 'react';
import  { HeaderContainer, Icon, ButtonIcon } from './Style'

export default function Header(){

    return(
        <HeaderContainer>
            <ButtonIcon><Icon src="https://icons-for-free.com/iconfiles/png/512/left+icon-1320184116587527937.png"/></ButtonIcon>
            {/* ajustar cor do icone */}
            <p>Pokedex</p>
            <button>Ver Pokedex</button>
        </HeaderContainer>
    );
}

