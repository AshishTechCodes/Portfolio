import React, { useContext } from 'react';
import { UserContext } from './Component1';

const Component5 = () => {
    const user = useContext(UserContext);
    return (
        <>
            <h2>{`Hello ${user} again!`}</h2>
        </>
    );
}

export default Component5;