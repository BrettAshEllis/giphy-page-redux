import React from "react";

function GifDisplay({ gif, addFavorite, removeFavorite, isFavorite }) {
    return (
        <div className="flex flex-column gif">
            <h3>{gif.title}</h3>
            <h6>{gif.id}</h6>
            <img src={gif.url} alt={gif.id} />
            {!isFavorite && (
                <button onClick={() => addFavorite(gif)}>Add Favorite</button>
            )}
            {isFavorite && (
                <button onClick={() => removeFavorite(gif.id)}>Remove Favorite</button>
            )}
        </div>
    );
}

export default GifDisplay;
