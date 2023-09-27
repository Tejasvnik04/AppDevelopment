import React, {useRef,useState, useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import AuthContext from "./context/AuthProvider";
import {Link, state} from 'react-router-dom'

import axios from './api/axios';
const LOGIN_URL ='/auth'
const Login =()=>  {
  const {setAuth} = useContext(AuthContext);
  const userRef=useRef();
  const errRef = useRef();
  const [email,setEmail]= useState('');
  const [pass, setPass]= useState('');
  const[errMsg, setErrMsg]= useState('');
  const[success, setSuccess]=useState(false);
  

  useEffect(()=> {
    userRef.current.focus();
  }, []) 
  
  useEffect(()=>{
    setErrMsg("")
  },[email,pass]
  )
    const handleSubmit = async (e)=>{
     e.preventDefault();
     console.log(email,pass);
     setEmail('');
     setPass('');
     setSuccess(true);
}  
  return (
    <>
        {success ? (
         <section>
            <h2>login succesfull!</h2>
            <br/>
            <p>
                <a href="/">Go to home</a>
            </p>
         </section>
        ):(
      <section>
        <p ref={errRef} className={errMsg ? "errMsg" :
        "offscreen"} aria-live="asseritive">{errMsg}</p>
        <h2>Sign-in</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Email : </label>
            <input type="text" 
            id="username" 
            ref={userRef}
            autocomplete="off"
            onChange={(e)=> setEmail(e.target.value)}
            value={email}
            required
            />

            <label htmlFor="password">Password : </label>
            <input type="password" 
            id="password" 
            onChange={(e)=> setPass(e.target.value)}
            value={pass}
            required
            />
            <button>Sign-In</button>
        </form>
        <p>
         Create an account?<br/>
         <span className="line">
            <Link to="/signup">Sign-up</Link>
         </span>
        </p>
      </section>
    )}
    </>
  )
  
}
export default Login;
