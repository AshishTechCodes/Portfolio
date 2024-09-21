import React, { useState, createContext } from 'react';
import Component2 from './Component2';

// Export UserContext
export const UserContext = createContext();

const Component1 = () => {
    const [user, setUser] = useState("Ashish Gupta");
    return (
        <UserContext.Provider value={user}>
            <h1>{`Hello ${user}!`}</h1>
            <Component2 />
        </UserContext.Provider>
    );
}

export default Component1;