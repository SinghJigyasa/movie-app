import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";


 const Login=()=>{
    const [inputValue,setInputValue] = useState({})

    const handleChange=(e)=>{
        setInputValue(pre=>({...pre, [e.target.name]:e.target.value}))
    }

    const handleClick=()=>{
        console.log(inputValue);
        axios.post('http://localhost:8080/login',inputValue)
        .then(res=>{
            console.log(res);
        })
    }
  return(
  <div className="h-screen flex justify-center items-center bg-gray-100">
     <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" style={{width:400}}>
      <h1 className="font-bold items-center py-3 px-2 justify-center flex underline text-lg">Login to your account</h1>
      <div className="mb-4 pt-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
           Email Address
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3  bg-gray-200 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleChange} name="email" type="email" placeholder="you@example.com"/>
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3  bg-gray-200 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="pass" onChange={handleChange} type="password" placeholder="******************"/>
      </div>
      <div className="flex items-center justify-between">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline" type="button" onClick={handleClick}>
          Sign In
        </button>
        <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" to='/signup'>
          New User?
        </Link>
      </div>
    </form>
  </div>
  )
}
export default Login;