// UserContextProvider.jsx
import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    
    return (
        <UserContext.Provider value={{ user, setUser }}> {/* Provide setUser in value */}
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
