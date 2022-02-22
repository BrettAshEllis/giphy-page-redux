// import React, { useState, useCallback, useContext } from "react";
// import { GifContext } from "./GifContext";
// export const UserContext = React.createContext(null);

// export const UserProvider = (props) => {
//     const { clearFavorites } = useContext(GifContext);
//     const [activeUser, setActiveUser] = useState(null);

//     const login = useCallback((username) => {
//         setActiveUser(username);
//     }, []);
//     const logout = useCallback(() => {
//         clearFavorites();
//         setActiveUser(null);
//     }, []);
//     return (
//         <UserContext.Provider value={{ activeUser, login, logout }}>
//             {props.children}
//         </UserContext.Provider>
//     );
// };
