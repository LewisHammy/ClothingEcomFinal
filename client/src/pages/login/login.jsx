import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';
import quantumThreadsImage from '../../assets/logo/QuantumThreads-logos_black.png';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  //created link to login user mutation
  const [loginUser] = useMutation(LOGIN_USER);
  
  const handleLogin = async (event) => {
    event.preventDefault();
    
    try {

      const { data } = await loginUser({
        variables: { email, password }});
        console.log('User logged in successfully:', data);

      // check if the token is received in the response from the loginUser mutation
      if (data && data.loginUser && data.loginUser.token) {
        console.log(data)
        Auth.login(data.loginUser.token);
        console.log('Login successful!');

        // Redirect or handle successful login here
      } else {
        setError('Invalid credentials with data');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setError('Something went wrong logging in');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <img src={quantumThreadsImage} alt="Quantum Threads" className="signup-image" />
      <form onSubmit={handleLogin}>
        <div>
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
        </div>
        <button onClick={handleLogin} className="login-button">
          Login
        </button>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
