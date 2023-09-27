import React, {useRef,useState, useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import AuthContext from "./context/AuthProvider";

import axios from './api/axios';
const LOGIN_URL ='/auth'
const Login =()=>  {
  const {setAuth} = useContext(AuthContext);
  const userRef=useRef();
  const errRef = useRef();
  const [user,setUser]= useState('');
  const [pass, setPass]= useState('');
  const [fname, setFname]= useState('');
  const [lname, setLname]= useState('');
  const [email, setEmail]= useState('');
  const[errMsg, setErrMsg]= useState('');
  const[success, setSuccess]=useState(false);

  useEffect(()=> {
    userRef.current.focus();
  }, []) 
  
  useEffect(()=>{
    setErrMsg("")
  },[user,pass,fname,lname,email]
  )
    const handleSubmit = async (e)=>{
     e.preventDefault();
     console.log(user,pass,fname,lname,email);
     setUser('');
     setPass('');
     setFname('');
     setLname('');
     setEmail('');
     setSuccess(true);
     async function save(event) {
      event.preventDefault();
      try {
        await axios.post("http://localhost:8080/apiSignup/postdetails", {
        user: user,
        email: email,
        pass: pass,
        fname:fname,
        lname:lname,
        });
        alert("Employee Registation Successfully");

      } catch (err) {
        alert(err);
      }
    }
}  
  return (
    <>
        {success ? (
         <section>
            <h2>Signup succesfull!</h2>
            <br/>
            <p>
                <a href="#">Go to home</a>
            </p>
         </section>
        ):(
      <section>
        <p ref={errRef} className={errMsg ? "errMsg" :
        "offscreen"} aria-live="asseritive">{errMsg}</p>
        <h2>Sign-up</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="firstname">Firstname : </label>
            <input type="text" 
            id="FirstName" 
            ref={userRef}
            autocomplete="off"
            onChange={(e)=> setFname(e.target.value)}
            value={fname}
            required
            />
            <label htmlFor="lastname">Lastname : </label>
            <input type="text" 
            id="lastname" 
            ref={userRef}
            autocomplete="off"
            onChange={(e)=> setLname(e.target.value)}
            value={lname}
            required
            />
            <label htmlFor="username">Username : </label>
            <input type="text" 
            id="username" 
            ref={userRef}
            autocomplete="off"
            onChange={(e)=> setUser(e.target.value)}
            value={user}
            required
            />
            <label htmlFor="username">Email-id : </label>
            <input type="text" 
            id="email" 
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
            <button>Sign Up</button>
        </form>
        <p>
         Create an account?<br/>
         <span className="line">
            <a href="/">Sign in</a>
         </span>
        </p>
      </section>
    )}
    </>
  )
  
}
export default Login;
