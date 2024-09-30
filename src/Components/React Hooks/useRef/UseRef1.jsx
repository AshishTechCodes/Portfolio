import React, { useRef, useState } from 'react';

const UseRef1 = () => {
    const count = useRef(0);
    const [inc, setInc] = useState(0);

    const handleIncrement = () => {
        count.current += 1;
        setInc(count.current);
    };

    return (
        <div>
            <button className='bg-blue-700 text-white font-bold px-5' onClick={handleIncrement}>Increment</button>
            <p>{inc}</p>
        </div>
    );
};

export default UseRef1;
