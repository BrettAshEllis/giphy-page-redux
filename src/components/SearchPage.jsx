import React, { useEffect, useMemo, useRef, useState } from "react";
// import { GifContext } from "../context/GifContext";
// import { UserContext } from "../context/UserContext";
import useFetch from "../hooks/useFetch";
import GifDisplay from "./GifDisplay";
import { connect } from "react-redux"
import { addFavorite, removeFavorite, setSearch } from "../redux/actions";

function SearchPage({
    user,
    addFavorite,
    favorites,
    removeFavorite,
    search,
    setSearch
}) {
    const searchInput = useRef(null);
    const [query, setQuery] = useState("");
    const { data, error, loading } = useFetch(query);
    const faveIds = useMemo(() => favorites.map((val) => val.id), [favorites]);
    useEffect(() => {
        if (data) {
            setSearch(data);
        }
    }, [data, setSearch])

    return (
        <div>
            <h2 className="text-center">Welcome: {user}</h2>
            <div className="flex gif-form">
                <input id="query" placeholder="Search for a gif" ref={searchInput} />
                <button
                    className="search-btn"
                    onClick={() => {
                        setQuery(searchInput.current.value);
                    }}
                >
                    Search
                </button>
            </div>
            {loading && <div>Loading</div>}
            {error && !loading && <h2>Something went wrong</h2>}
            {!error && search && !loading && (
                <div className="flex">
                    {search.map((val) => (
                        <GifDisplay
                            key={val.id}
                            gif={val}
                            addFavorite={addFavorite}
                            removeFavorite={removeFavorite}
                            isFavorite={faveIds.includes(val.id)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        favorites: state.gifs.favorites,
        user: state.user,
        search: state.gifs.search
    }
}

const mapDispatchToProps = {
    setSearch,
    addFavorite,
    removeFavorite,
}


export default connect(mapDispatchToProps, mapStateToProps)(SearchPage);
