import axios from 'axios';
import { TextField, Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../actions';
import { useNavigate } from 'react-router-dom';
import Cards from '../Components/Card';


const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fielderror, setFieldError] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const isValidUserName = (username) => {
    return /\S+@\S+\.\S+/.test(username);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!isValidUserName(username)) {
      setFieldError('Please enter a valid email address.');
      return;
    }
    setError('');
    try {
      const response = await axios.post('http://localhost:3000/user/login', { email: username, password : password });
      if (response.data) {
        dispatch(login(response.data));
        navigate('/home');
      } else {
        setError('Invalid login credentials.');
      }
    } catch (err) {
      setError(err.response && err.response.data ? err.response.data.message : 'Login failed. Please try again later.');
    }
  };

  return (
    <Cards title="Login">
      <form onSubmit={handleLogin}>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          style={{ marginBottom: 20 }}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          error={!!fielderror && !isValidUserName(username)}
          helperText={!!fielderror && !isValidUserName(username) ? fielderror : ''}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          style={{ marginBottom: 20 }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <Typography color="error">{error}</Typography>}
        <Button type="submit" variant="contained" color="primary" fullWidth>
            Sign In
        </Button>
      </form>
    </Cards>
  );
};
export default Login;