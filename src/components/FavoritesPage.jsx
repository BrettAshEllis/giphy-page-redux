import React, { useContext } from "react";
import GifDisplay from "./GifDisplay";
import { GifContext } from "../context/GifContext";

function FavoritesPage() {
    const { favorites, removeFavorite } = useContext(GifContext);
    return (
        <div>
            <div className="flex">
                {favorites.map((val) => (
                    <GifDisplay
                        key={val.id}
                        gif={val}
                        removeFavorite={removeFavorite}
                        isFavorite={true}
                    />
                ))}
            </div>
        </div>
    );
}

export default FavoritesPage;
