import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const singIn = (e) => {
    e.preventDefault();
    //some fancy firebase login
  };

  const register = (e) => {
    e.preventDefault();
    //some fancy firebase register
  };

  return (
    <div className='login'>
      <Link to='/'>
        <img
          src='https://png.pngitem.com/pimgs/s/1-11991_amazon-logo-transparent-background-image-amazon-logo-white.png'
          alt='logo'
          className='login_logo'
        />
      </Link>
      <div className='login_container'>
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type='submit' onClick={singIn} className='login_signInButton'>
            Sign In
          </button>
        </form>
        <p>By signing you will agree</p>
        <button onClick={register} className='login_registerButton'>
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
