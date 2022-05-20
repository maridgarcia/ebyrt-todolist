/* eslint-disable no-alert */
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';
import UserContext from '../context/UserContext';
import Input from './Input';
import Button from './Button';

function Register() {
  const [register, setRegister] = useState({
    username: '',
    email: '',
    password: '',
  });

  const { setUsername } = useContext(UserContext);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await api.post('/register', register);
      const response = await api.post('/login', { email: register.email, password: register.password });
      localStorage.setItem('authorization', response.data.token);
      setUsername(response.data.username);
      navigate('/login');
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div>
      <h1> Register </h1>
      <form onSubmit={handleRegister}>
        <Input
          label="username"
          type="text"
          testid="username-input"
          value={register.username}
          onChange={({ target }) => {
            setRegister({ ...register, username: target.value });
          }}
        />
        <Input
          label="email"
          type="text"
          testid="email-input"
          value={register.email}
          onChange={({ target }) => {
            setRegister({ ...register, email: target.value });
          }}
        />
        <Input
          label="password"
          type="text"
          testid="password-input"
          value={register.password}
          onChange={({ target }) => {
            setRegister({ ...register, password: target.value });
          }}
        />
        <Button
          label="Log in"
        />
      </form>
    </div>
  );
}

export default Register;
