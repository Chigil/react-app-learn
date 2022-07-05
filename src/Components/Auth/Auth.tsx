import React, { FormEvent, useContext, useState } from 'react';
import http from '../../http';
import Context from '../../Context/context';

const Auth = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setIsAuth, setOpenModal } = useContext(Context);
  const JSON_URL = 'https://fakestoreapi.com/auth/login'; //'mor_2314',  '83r5^_';

  const login = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    http.post(JSON_URL, { username: 'mor_2314', password:  '83r5^_' }).then(res => {
      localStorage.setItem('token', res.data.token);
      setIsAuth(true);
      setOpenModal(false);
    });
  };

  return (
    <form onSubmit={(event) => login(event)} className="d-flex">
      <input
        onChange={(event) => setUsername(event.target.value)}
        id="username"
        placeholder="input your username"
      />
      <input
        onChange={(event) => setPassword(event.target.value)}
        id="password" type="password"
        placeholder="input your password"
      />
      <button className="btn btn-success">Login</button>
    </form>
  );
};

export default Auth;