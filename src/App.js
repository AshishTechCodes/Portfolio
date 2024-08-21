import React from 'react'
import Card from './Components/props/Card'
import Effect from './Components/useEffect/Effect';
import './App.css'
import Increment from './Components/useState/Increment';
import From from './Components/Form/From';
import Form_orignal from './Components/Form/Form_orignal';
import Register_1 from './Components/useForm/Register_1';
import Unregister_2 from './Components/useForm/Unregister_2';
import FormState_3 from './Components/useForm/FormState_3';
import Multiple_error from './Components/useForm/Multiple_error';
import Timer from './Components/useEffect/Timer';
import Watch from './Components/useForm/Watch';
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
      <br/><br/> */}
      {/* <Timer/> */}
      {/* <br/><br/>
      <Increment/>
      <br/><br/>
      <From/>
      <br/><br/>
      <Form_orignal/>
      <br/><br/> */}
      <fieldset className='border-violet-700 border-4'>
        <legend>useForm</legend>
      <Register_1/>
      <br/>
      <Unregister_2/>
      <br/>
      <FormState_3/>
      <br/>
      {/* <Multiple_error/>
      <br/> */}
      <Watch/>
      </fieldset>
     <br/><br/>
      </center>
    </div>
  )
}

export default App