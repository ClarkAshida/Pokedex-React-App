import React, {useContext, useState} from "react";
import FavoriteContext from "../contexts/favoritesContext";

const Pokemon = (props) => {
    
    const {favoritePokemons, updateFavoritePokemons} = useContext(FavoriteContext)
    const {pokemon} = props;
    const onHeartClick = () => {
        updateFavoritePokemons(pokemon.name)
    }
    const heart = favoritePokemons.includes(pokemon.name) ? "❤️" : "🖤";

    var pokemonColorArray = pokemon.types.map((type, index) => {
        let color = type.type.name
        return color
    })

    var pokemonColor = pokemonColorArray[0]

    let style = `pokemon-card ${pokemonColor}`
    
    return (
    <div className={style}>

    {pokemon.types.map((type, index) => {
        let color = type.type.name
        return (
            <div key={index} className={color}></div>
        )
    })}

        <div className="pokemon-image-container">
            <img alt={pokemon.name} src={pokemon.sprites.front_default} className="pokemon-image"/>
        </div>
        <div className="card-body">
            <div className="card-top">
                <h3> {pokemon.name}</h3>
                <div>#{pokemon.id}</div>
            </div>
            <div className="card-bottom">
                <div className="pokemon-type">
                    {pokemon.types.map((type, index) => {
                        let pokemonType = "pokemon-type-text" + " " + type.type.name
                        return (
                            <div key={index} className={pokemonType}>{type.type.name}</div>
                        )
                    })}
                </div>
                <button className="pokemon-heart-btn" onClick={onHeartClick}>
                    {heart}
                </button>
            </div>
        </div>
    </div>)
}

export default Pokemon;