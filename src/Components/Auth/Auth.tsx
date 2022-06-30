import React, { useContext } from 'react';
import http from '../../http';
import Context from '../../Context/context';

const Auth = () => {
  //1. Add input for loginData
  //2. After success request change setIsAuth:true
  const { setIsAuth } = useContext(Context);
  const login = () => {
    http.post('https://fakestoreapi.com/auth/login', { username: 'mor_2314', password: '83r5^_' }).then(res => {
      console.log(res);
    });
  };
  return (
    <button className="btn btn-success" onClick={login}>Login</button>
  );
};

export default Auth;