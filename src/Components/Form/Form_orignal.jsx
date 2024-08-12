import React,{useState} from 'react'
const Form_orignal = () => {
    const [name,setName] =useState("");
    const [lname,setLname]=useState("");
    const [password,setPassword]=useState("");
    const [city,setCity]=useState("");
    const [stateName,setStateName]=useState("");
    const [zip,setZip]=useState("");
    const [formData, setFormData]=useState({})
    const [error, setError]=useState({
      name:'',
      lname:'',
      password:'',
      city:'',
      state:'',
      zip:''
    });
    const handleSubmit=(e)=>{
        e.preventDefault();
        const formData={
            name:name,
            lname:lname,
            password:password,
            city:city,
            state:stateName,
            zip:zip
        }
        setFormData(formData);
        console.log(formData);
    }
  return (
    <fieldset className='border-4 border-violet-600'>
    <fieldset className='border-4 border-violet-200'>
        <legend>Application Form</legend>
        <form className="w-full max-w-lg">
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
        First Name
      </label>
      <input className={`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${error.name?'border-red-500':''}`} id="grid-first-name" type="text" placeholder="Jane" onChange={(e)=>{
        setName(e.target.value);
        if (e.target.value.length<=3){
          setError((...prev)=>({
            ...prev,
            name:'The Name Should be more than 3 character.'
          }))
        }else{
          setError((...prev)=>({
            ...prev,
            name:''
          }))
        }
      }}/>
      <p className='text-red-600'>{error.name}</p>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Last Name
      </label>
      <input className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'${error.lname?'border-red-500':''}`} id="grid-last-name" type="text" placeholder="Doe" onChange={(e)=>{
        setLname(e.target.value);
        if (e.target.value.length<=3){
          setError((...prev)=>({
            ...prev,
            lname:'The Last Name Should be more than 3 character.'
          }))
        }else{
          setError((...prev)=>({
            ...prev,
            lname:''
          }))
        }
      }}/>
     <p className='text-red-600'>{error.lname}</p>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
        Password
      </label>
      <input className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${error.password?'border-red-500':''}`} id="grid-password" type="password" placeholder="******************" onChange={(e)=>{
        setPassword(e.target.value);
        if (e.target.value.length<=8){
          setError((...prev)=>({
            ...prev,
            password:'The Last Name Should be more than 8 character.'
          }))
        }else{
          setError((...prev)=>({
            ...prev,
            password:''
          }))
        }
      }} />
       <p className='text-red-600'>{error.password}</p>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-2">
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
        City
      </label>
      <input className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${error.city?'border-red-500':''}`} id="grid-city" type="text" placeholder="Albuquerque" onChange={(e)=>{
        setCity(e.target.value)
        if(e.target.value.length <= 2){
          setError((...prev)=>({
            ...prev,
            city:'The Last Name Should be more than 3 character.'
          }))
        }else{
          setError((...prev)=>({
            ...prev,
            city:''
          }))
        }
        }}/>
      <p className='text-red-600'>{error.city}</p>
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
        State
      </label>
      <div className="relative">
        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" onChange={(e)=>{
            setStateName(e.target.value)
        }}>
          <option>New Mexico</option>
          <option>Missouri</option>
          <option>Texas</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
        Zip
      </label>
      <input className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500${error.zip?"border-red-500":""}`} id="grid-zip" type="number" placeholder="90210" onChange={(e)=>{
        setZip(e.target.value);
        if (e.target.value.length<=4){
          setError((...prev)=>({
            ...prev,
            zip:'The Last Name Should be more than 4 character.'
          }))
        }else{
          setError((...prev)=>({
            ...prev,
            zip:''
          }))
        }
      }} />
      <p className='text-red-500'>{error.zip}</p>
    </div>
  </div>
  <button onClick={handleSubmit} className='bg-violet-700 text-white rounded-md'>Submit</button>
</form>
<div>
  <h1 className='bg-green-800 w-fit rounded-md text-white mt-2 font-semibold'>OnChange event</h1>
<p>First Name: {name}</p>
<p>Last Name: {lname}</p>
<p>Password: {password}</p>
<p>City: {city}</p>
<p>State: {stateName}</p>
<p>Zip Code: {zip}</p>    
</div>
    </fieldset>
    <fieldset className='border-4 border-violet-300'>
      <legend>Form Details</legend>
    <p>First Name: {formData.name}</p>
    <p>Last Name: {formData.lname}</p>
    <p>Password: {formData.password}</p>
    <p>City: {formData.city}</p>
    <p>State: {stateName}</p>
    <p>Zip Code: {zip}</p>
    </fieldset>
    <br/>
    </fieldset>
  )
}

export default Form_orignal