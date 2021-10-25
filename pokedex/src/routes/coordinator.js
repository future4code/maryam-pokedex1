export const goToHome = (history) => {
    history.push("/")
}

export const goToPokemonDetail = (history, name) => {
    history.push(`/pokemon/${name}`)
}

export const goToPokedex = (history) => {
    history.push("/pokedex")
}