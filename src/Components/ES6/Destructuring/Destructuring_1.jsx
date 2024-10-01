import React, { useEffect } from 'react';

const Destructuring_1 = () => {
    const vehicle = () => {
        return {
            name: 'honda',
            color: 'Red',
            price: 1000
        };
    };

    useEffect(() => {
        const { name, color, price } = vehicle();
        const message = `${name} ${color} ${price}`;
        document.getElementById('detail').innerHTML = message;
    }, []);

    return (
        <fieldset className='border-violet-700 border-4'>
        <div id='detail'>Details:</div>
        </fieldset>
    );
};

export default Destructuring_1;