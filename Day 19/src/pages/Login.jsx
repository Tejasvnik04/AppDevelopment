import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../redux/userSlice';
import axios from "axios"
import './Login.css';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    username: '',
    password: '',
  });
  const [loginMode, setLoginMode] = useState('user'); // Default to 'user' mode

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.id]: e.target.value });
  };

  const handleLoginModeChange = (e) => {
    setLoginMode(e.target.value);
  };

  const submitHandler = async(e) => {
    e.preventDefault();
    const token="eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJnaGZsIiwiaWF0IjoxNjk2OTE4ODY2LCJleHAiOjE2OTcwMDUyNjZ9.oh9yY472WWkw4yZ98VMceCx4oo2MyT9ks0jWalwMtdQ";
    try {
      console.log(token)
      const response = await axios.post('http://localhost:8080/api/v1/auth/login',formdata,{
        headers:{
          'Authorization':`Bearer ${token}`
        }
      });
      const newPlant = response.data;
      setPlants([...plants, newPlant]);
      setFormdata({
        username:'',
        password:''
      });
    } catch (error) {
      console.error('Error adding user:', error);
    }
    dispatch(login({ ...formdata, mode: loginMode })); // Include login mode in user details
    if (loginMode === 'admin') {
      navigate('/admin'); // Route to the admin page if admin mode is chosen
    } else {
      navigate('/Dashboard'); // Route to the user dashboard
    }
  };

  return (
    <>
      <div className='auth-container'>
        <div className='auth-wrapper'>
          <form className='auth-form app-x-shadow' onSubmit={submitHandler}>
            <h1 className='auth-heading'>Login Form</h1>
            <input
              type='text'
              name='username'
              id='username'
              value={formdata.username}
              onChange={handleChange}
              placeholder='username'
              className='auth-field'
              required
            />
            <input
              type='password'
              name='password'
              id='password'
              value={formdata.password}
              onChange={handleChange}
              placeholder='password'
              className='auth-field'
              required
            />

            <div className='login-mode'>
              <label>
                <input
                  type='radio'
                  name='loginMode'
                  value='user'
                  checked={loginMode === 'user'}
                  onChange={handleLoginModeChange}
                />
                User
              </label>
              <label>
                <input
                  type='radio'
                  name='loginMode'
                  value='admin'
                  checked={loginMode === 'admin'}
                  onChange={handleLoginModeChange}
                />
                Admin
              </label>
            </div>

            <button type='submit' className='auth-btn app-x-shadow'>
              Login
            </button>
          </form>
          <Link to='/Register' className='auth-links'>
            Register
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login;
