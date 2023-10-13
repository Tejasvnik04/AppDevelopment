import React from 'react'
import { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import "./REgister.css"
import axios from 'axios'
function Register() { 
  const navigate = useNavigate()
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    password: "",
    role:"CUSTOMER"
  })
  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.id]: e.target.value })
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    try {
      console.log(formdata);
      const res = axios.post("http://localhost:8080/api/v1/auth/register",formdata)
    } catch (error) {
      console.log(error);
    }
    navigate('/')
  }


  return (
    <>
      <div className='auth-container'>
        <div className='auth-wrapper'>
          <form className='auth-form app-x-shadow' onSubmit={handleSubmit}>
            <h1 className='auth-heading'>Registration Form</h1>
              <input type="text" name="username" id="name" value={formdata.name} placeholder='username' onChange={handleChange} className='auth-field' required />
              <input type="email" name="email" id="email" value={formdata.email} placeholder='email' onChange={handleChange} className='auth-field' required />
              <input type="password" name="password" id="password" value={formdata.password} placeholder='password' onChange={handleChange} className='auth-field' required />
              <button type='submit' className='auth-btn app-x-shadow'> Register </button>
          </form>

          <Link to='/' className='auth-links'>Login</Link>
        </div>
      </div>

    </>
  )
}

export default Register