import React from 'react'
import './App.css'
import Card from './Components/props/Card'
import Effect from './Components/React Hooks/useEffect/Effect';
import Increment from './Components/React Hooks/useState/Increment';
import From from './Components/Form/From';
import Form_orignal from './Components/Form/Form_orignal';
import Register_1 from './Components/React Hooks/useForm/Register_1';
import Unregister_2 from './Components/React Hooks/useForm/Unregister_2';
import FormState_3 from './Components/React Hooks/useForm/FormState_3';
import Multiple_error from './Components/React Hooks/useForm/Multiple_error';
import Timer from './Components/React Hooks/useEffect/Timer';
import Watch_4 from './Components/React Hooks/useForm/Watch_4';
import Handle_submit_Sync from './Components/React Hooks/useForm/Handle_submit_5/Handle_submit_Sync';
import Handle_submit_Async from './Components/React Hooks/useForm/Handle_submit_5/Handle_submit_Async';
import Uncontrolled_Component from './Components/React Hooks/useForm/Reset_6 (Uncontrolled_Controlled)/Uncontrolled_Component';
import Controlled_Component from './Components/React Hooks/useForm/Reset_6 (Uncontrolled_Controlled)/Controlled_Component';
import UseMemo1 from './Components/React Hooks/useMemo/UseMemo1';
import Component1 from './Components/React Hooks/useContext/Component1';
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
      <Timer/>
      <br/><br/>
      <Increment/>
      <br/><br/>
      <From/>
      <br/><br/>
      <Form_orignal/>
      <br/><br/>
      <fieldset className='border-violet-700 border-4'>
        <legend>useForm</legend>
      <Register_1/>
      <br/>
      <Unregister_2/> 
      <br/>
      <FormState_3/>
      <br/>
      <Multiple_error/>
      <br/>
      <Watch_4/>
      <br/>
      <Handle_submit_Sync/>
      <br/>
      <Handle_submit_Async/>
      <br/>
      <Uncontrolled_Component/>
      <br/>
      <Controlled_Component/>
      </fieldset>
     <br/><br/>
     <fieldset className='border-violet-700 border-4'>
      <legend>useMemo</legend>
      <UseMemo1/>
     </fieldset> */}
     <fieldset className='border-violet-700 border-4'>
     <legend>useContext</legend>
     <fieldset className='border-violet-700 border-4'>
      <Component1/>
      </fieldset>
     </fieldset>
      </center>
    </div>
  )
}

export default App