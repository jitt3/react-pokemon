export const getPokemonList = async (key, url) => {
    return (await fetch(url)).json();
}
