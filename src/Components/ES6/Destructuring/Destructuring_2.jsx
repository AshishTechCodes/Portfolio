import React, { useEffect } from 'react';

const Destructuring_2 = () => {
    const vehicle = () => {
        return {
            name: 'audi',
            color: 'blue',
            rate: 4.3,
            price: '50 lakh',
            registeration: {
                city: 'mumbai',
                state: 'Maharashtra',
                country: 'India'
            }
        };
    };

    useEffect(() => {
        myvehicle(vehicle());
    }, []); // Call myvehicle when the component mounts

    function myvehicle({ name, color, rate, price, registeration: { city, state, country } }) {
        const message = name + ' ' + color + ' ' + rate + ' ' + price + ' ' + city + ' ' + state + ' ' + country;
        document.getElementById('details').innerHTML = message;
    }

    return (
        <fieldset className='border-violet-700 border-4'>
        <div id='details' className='details'></div>
        </fieldset>
    );
}

export default Destructuring_2;