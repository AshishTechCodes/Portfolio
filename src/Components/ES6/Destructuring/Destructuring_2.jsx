import React from 'react'

const Destructuring_2 = () => {
    const vehicle= () =>{
        return{
            name:'audi',
            color:'blue',
            rate : 4.3,
            price:'50 lakh',
            registeration:{
                city:'mumbai',
                state:'Maharashtra',
                country:'India'
            }
        };
    };
    myvehicle(vehicle)
    function myvehicle({name,color,rate,price,registeration:{city,state,country}}){
        const message = name+ color + rate + price + city + state + country;
        document.getElementById('details').innerHTML = message;
    }
  return (
    <div className='details'></div>
  )
}

export default Destructuring_2