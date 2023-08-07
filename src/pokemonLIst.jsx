import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
const PokemonList = () => {
    const navigate = useNavigate();
    const [allPokemon, setAllPokemon] = useState([])
    useEffect(() => {
        const getPokemon = async () => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon`)
            const data = await response.json();
            const pokemonList = data.results;
            console.log(pokemonList)
            setAllPokemon(pokemonList)
        }
        getPokemon()
    },[])


    const showSinglePokemon = async (pokemonUrl) => {
        // const pokemonId = pokemonUrl.split('/')[6]
        const response = await fetch(pokemonUrl)
        const body = await response.json()
        console.log(body)
        
        navigate(`/pokemon/${body.name}`)
    }
    return (
        <>
            <h1>hi</h1>
            <ul>
                {
                    allPokemon.map((singlePokemon) => {
                        const name = singlePokemon.name;
                        return (
                            <div key={name}>
                             <li key={name}>{name}</li>
                             <button onClick={ () => showSinglePokemon(singlePokemon.url)}>Details</button>
                            </div>
                            
                        )
                    })
                }
            </ul>
        </>
    )
}
export default PokemonList