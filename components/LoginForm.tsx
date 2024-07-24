'use client';

import { useState } from 'react';
import useAuthSession from '../hooks/useAuthSession';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import { toast } from 'react-toastify';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { loading, error, login } = useAuthSession();
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username && password) {
      login({ username, password }).then((res) => {
        if (res.meta.requestStatus === 'fulfilled') {
          toast.success('Login successful!');
        } else {
          //toast.error(res.error.message);
        }
      });
    } else {
      toast.error('Please fill in both fields');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit" disabled={loading}>Login</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default LoginForm;
