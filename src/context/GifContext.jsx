// import React, { useState, useCallback } from "react";

// export const GifContext = React.createContext(null);

// export const GifProvider = (props) => {
//     //! Actual state / functions / whatever we need
//     const [favorites, setFavorites] = useState([]);

//     const addFavorite = useCallback((gif) => {
//         setFavorites((curr) => [...curr, gif]);
//     }, []);

//     const removeFavorite = useCallback((id) => {
//         setFavorites((curr) => curr.filter((val) => val.id !== id));
//     }, []);

//     const clearFavorites = useCallback(() => setFavorites([]), []);

//     return (
//         <GifContext.Provider
//             value={{
//                 favorites,
//                 addFavorite,
//                 removeFavorite,
//                 clearFavorites,
//             }}
//         >
//             {props.children}
//         </GifContext.Provider>
//     );
// };
