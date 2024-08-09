import React from 'react'
import Card from './Components/props/Card'
import Effect from './Components/useEffect/Effect';
import './App.css'
import Increment from './Components/useState/Increment';
import From from './Components/Form/From';
import Form_orignal from './Components/Form/Form_orignal';
const App = () => {
  var count = 10;
  return (
    <div>
      <center>
      {/* <div className="Hello">Hello world</div>
      <div className="circle">hii</div>
      <Card title="card 1" description="lorem dnfd kidnfd"/>
      <Card number={count}/>
      <Card number={count+5}/>
      <Card/>
      <br/><br/>
      <Effect/>
      <br/><br/>
      <Increment/>
      <br/><br/>
      <From/>
      <br/><br/> */}
      <Form_orignal/>
      </center>
    </div>
  )
}

export default App