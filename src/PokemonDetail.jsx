import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
const PokemonDetail = () => {
    const { pokemonName } = useParams();
    const [pokemon, setPokemon] = useState({})
    useEffect(() => {
        const getPokemonDetails = async () => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            const pokemonFromAPI = await response.json();
            console.log(pokemonFromAPI)
            setPokemon(pokemonFromAPI)
        }
        getPokemonDetails();
    }, [])
    return (
        <>
            <h1>PokemonDetail</h1>
            <h2>{pokemon.name}</h2>
            <p>{pokemon.id}</p>
            <p>{pokemon.weight}</p>
        </>

    )
}
export default PokemonDetail